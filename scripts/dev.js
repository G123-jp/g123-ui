require('esbuild')
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    sourcemap: true,
    format: 'cjs',
    watch: true,
    loader: { '.png': 'dataurl', '.svg': 'text' },
    outfile: 'dist/index.js',
  })
  .catch(() => process.exit(1));