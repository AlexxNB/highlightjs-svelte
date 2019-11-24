# highlightjs-svelte
Svelte language definition for Highlight.js

## install
```bash
npm i highlight.js highlightjs-svelte
```

## usage

### browser

```html
<script src="https://cdn.jsdelivr.net/npm/highlightjs"></script>
<script src="https://cdn.jsdelivr.net/npm/highlightjs-svelte"></script>
<script>
  hljs.registerLanguage("svelte", window.hljsDefineSvelte);
  hljs.initHighlightingOnLoad();
</script>

```

### node
```javascript
const hljs = require('highlight.js');
const hljs_svelte = require('highlightjs-svelte');

hljs_svelte(hljs);

const highlighted = hljs.highlight('svelte', source).value;
```

