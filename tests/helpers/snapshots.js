var path = require('path');
var fs = require('fs-extra');

const TESTS_DIR = path.resolve('tests');
const SNAPSHOTS_DIR = path.join(TESTS_DIR,'snapshots');
const TEST_EXT = '.svelte';
const SNAPSHOT_EXT = '.html';

module.exports.getSnaplist = function(handler,update=false){
    
    if(update) fs.emptyDirSync(SNAPSHOTS_DIR);

    const files = fs.readdirSync(TESTS_DIR).filter(f => f.endsWith(TEST_EXT));

    let snaplist = [];
    for(let i=0; i < files.length; i++){
        const name = path.basename(files[i],TEST_EXT);
        const source = fs.readFileSync(path.join(TESTS_DIR,files[i]),'utf-8');
        const result = handler(source);
        const snapshot = module.exports.getSnapshot(name,result);

        snaplist.push({name,source,result,snapshot});
    }

    return snaplist;
}

module.exports.getSnapshot = function (name,initial){
    const snapshot_file = path.join(SNAPSHOTS_DIR,name+SNAPSHOT_EXT);

    if(fs.existsSync(snapshot_file))
        return fs.readFileSync(snapshot_file,'utf-8');
    else
        return module.exports.updateSnapshot(name,initial);  
}

module.exports.updateSnapshot = function (name,data){
    const snapshot_file = path.join(SNAPSHOTS_DIR,name+SNAPSHOT_EXT);
    fs.ensureFileSync(snapshot_file);
    fs.writeFileSync(snapshot_file,data);
    return data;
}