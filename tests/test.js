const command = process.argv[2];

const {getSnaplist} = require('./helpers/snapshots');
const {createBrowserTest} = require('./helpers/browser');
const {createVisualTest} = require('./helpers/visual');
const {doTesting} = require('./helpers/testing');

const hljs = require('highlight.js');
const hljs_svelte = require('../dist/index.js');
hljs_svelte(hljs);


function handleSource(source){
    return hljs.highlight('svelte', source).value;
}



const snaplist = getSnaplist(handleSource,(command === 'update'));
createBrowserTest(snaplist);
createVisualTest(snaplist);
doTesting(snaplist);

