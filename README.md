# highlightjs-svelte
Svelte language definition for Highlight.js

## install
```bash
npm i highlight.js highlightjs-svelte
```

## usage

### browser

```html
<script src="https://unpkg.com/highlightjs"></script>
<script src="https://unpkg.com/highlightjs-svelte/dist/svelte.min.js"></script>
<script>
  hljs.initHighlightingOnLoad();
</script>
<pre><code class="svelte">Hello, {name}!</code></pre>
```

### node
```javascript
const hljs = require('highlight.js');
const hljs_svelte = require('highlightjs-svelte');

hljs_svelte(hljs);

const highlighted = hljs.highlight('svelte', source).value;
```

