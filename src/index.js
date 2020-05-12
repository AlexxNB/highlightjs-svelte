import {hljsDefineSvelte} from './svelte.js';

export default function(hljs) {
  hljs.registerLanguage("svelte", hljsDefineSvelte);
};