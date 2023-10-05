import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
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
  onwarn(warning, warn) {
    // Akira: ignore warning caused by 'use client' in react-hot-toast@2.4.1
    // ref: https://github.com/TanStack/query/issues/5175#issuecomment-1482196558
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }
    warn(warning);
  },
  external: ['react'],
  plugins: [
    postcss({ modules: true, minimize: true, extract: true, plugins: [] }),
    svgr(),
    // Akira: let @svgr/rollup to handle svg import
    image({ exclude: '**/*.svg' }),
    resolve(),
    commonjs(),
    injectProcessEnv({
      NO_COLOR: 0,
      FORCE_COLOR: 3,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
};
