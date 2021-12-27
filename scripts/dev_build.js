// 'dev-build': 'esbuild src/index.js --bundle --loader:.png=dataurl --loader:.svg=text --outfile=dist/index.js',
require('esbuild')
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    format: 'cjs',
    loader: { '.png': 'dataurl', '.svg': 'text' },
    outfile: 'dist/index.js',
  })
  .catch(() => process.exit(1));
