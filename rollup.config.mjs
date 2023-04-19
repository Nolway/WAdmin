import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import sveltePreprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';

export default {
  input: {
    app: 'assets/scripts/app.ts',
    install: 'assets/scripts/install.ts',
  },
  output: {
    dir: 'public/assets/build',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    svelte({
      include: 'assets/scripts/**/*.svelte',
      preprocess: sveltePreprocess({
        typescript: {
          tsconfigFile: 'tsconfig.front.json',
        },
      }),
    }),
    postcss({
      extract: true,
      config: {
        path: 'postcss.config.js',
      },
    }),
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte'],
    }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.front.json',
    }),
    copy({
      targets: [
        {
          src: 'node_modules/@fortawesome/fontawesome-free/webfonts/*',
          dest: 'public/assets/build/fonts',
        },
      ],
    }),
    process.env.NODE_ENV === 'production'
      ? ''
      : livereload('public/assets/build'),
  ],
};
