import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup'
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: ['react'],
  plugins: [
    postcss({ modules: true, extract: true, plugins: [] }),
    svgr(),
    // Akira: let @svgr/rollup to handle svg import
    image({exclude: '**/*.svg'}),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
};
