import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.ts',
  output: {
    file: 'build/scripts/server/entry.js',
    format: 'iife'
  },
  plugins: [
    json(),
    resolve({browser: true}),
    commonjs({extensions: ['.js', '.ts']}),
    typescript({
      outDir: "tmp"
    })
  ]
};