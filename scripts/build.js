require('esbuild')
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    format: 'cjs',
    minify: true,
    loader: { '.png': 'dataurl', '.svg': 'text' },
    outfile: 'dist/index.js',
  })
  .catch(() => process.exit(1));