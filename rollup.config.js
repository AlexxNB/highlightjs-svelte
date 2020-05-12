import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const pkg = require('./package.json');

export default [{
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'default' },
      { file: pkg.module, format: 'es' }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [terser()]
  },
  {
      input: 'src/browser.js',
      output:{ 
          file: pkg.browser, 
          name: 'svelte',
          format: 'iife' 
      },
      external: false,
      plugins: [resolve(),commonjs(),terser()]
  }
]