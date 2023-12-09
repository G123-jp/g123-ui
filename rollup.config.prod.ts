import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  onwarn(warning, warn) {
    // Akira: ignore warning caused by 'use client'
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
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
};
