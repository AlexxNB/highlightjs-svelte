var path = require('path');
var fs = require('fs-extra');

const TESTS_DIR = path.resolve('tests');
const HTML_FILE = path.join(TESTS_DIR,'browser','index.html');

const HJS_FILE =  path.resolve(path.join('node_modules','highlight.js','lib','highlight.js'));
const SVELTE_LANG_FILE =  path.resolve(path.join('dist','svelte.min.js'));
const CSS_FILE =  path.resolve(path.join('node_modules','highlight.js','styles','rainbow.css'));

module.exports.createBrowserTest = function(snaplist){
    const body = snaplist.reduce((acc,snapshot)=>{
        return acc + `
        <h1>${snapshot.name}</h1>
        <pre><code class="svelte">${snapshot.source.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
        <hr />
        `;
    },'');


    fs.ensureFileSync(HTML_FILE);
    fs.writeFileSync(HTML_FILE,`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Browser Test page</title>
            <link rel="stylesheet" href="${CSS_FILE}">
        </head>
        <script src="${HJS_FILE}"></script>
        <script src="${SVELTE_LANG_FILE}"></script>
        <script>hljs.initHighlightingOnLoad();</script>
        <body>
            ${body}
        </body>
    </html>
    `);

    console.log('Open browser test on: '+HTML_FILE);
}
