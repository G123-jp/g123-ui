import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import { terser } from "rollup-plugin-terser";
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
    postcss({ modules: true, minimize: true, extract: true, plugins: [] }),
    image(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    terser()
  ],
};
