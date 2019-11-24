var path = require('path');
var fs = require('fs-extra');

const TESTS_DIR = path.resolve('tests');
const HTML_FILE = path.join(TESTS_DIR,'visual','index.html');
const CSS_FILE =  path.resolve(path.join('node_modules','highlight.js','styles','rainbow.css'));

module.exports.createVisualTest = function(snaplist){
    const body = snaplist.reduce((acc,snapshot)=>{
        return acc + `
        <h1>${snapshot.name}</h1>
        <pre class="hljs">${snapshot.result}</pre>
        <hr />
        `;
    },'');

    const CSS = fs.readFileSync(CSS_FILE,'utf-8');

    fs.ensureFileSync(HTML_FILE);
    fs.writeFileSync(HTML_FILE,`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Visual Test page</title>
        </head>
            <style>
                ${CSS}
            </style> 
        <body>
            ${body}
        </body>
    </html>
    `);

    console.log('Open visual test on: '+HTML_FILE);
}
