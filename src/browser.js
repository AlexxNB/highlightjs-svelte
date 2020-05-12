import xml from 'highlight.js/lib/languages/xml';
import js from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import {hljsDefineSvelte} from './svelte.js';

hljs.registerLanguage("xml",xml);
hljs.registerLanguage("javascript",js);
hljs.registerLanguage("css",css);
hljs.registerLanguage("svelte",hljsDefineSvelte);