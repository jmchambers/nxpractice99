import { defineConfig } from 'vite';
import { resolve, basename } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import copy from 'rollup-plugin-copy';
import { capitalize, camelize } from '@vue/shared';

const name = basename(__dirname);

export default defineConfig(({ mode }) => {
  return {
    esbuild: {
      minify: mode === 'production',
    },
    build: {
      outDir: `../../dist/packages/${name}/dist`,
      emptyOutDir: false,
      sourcemap: false,
      target: 'esnext',
      minify: mode === 'production' ? 'terser' : false,
      lib: {
        name: capitalize(camelize(name)),
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es', 'umd', 'iife', 'cjs'],
        fileName: (format) =>
          mode === 'production'
            ? `${name}.${format}.prod.js`
            : `${name}.${format}.js`,
      },
      rollupOptions: {
        plugins: [
          tsconfigPaths({
            root: '../..',
          }),
          copy({
            targets: [
              {
                src: 'README.md',
                dest: `../../dist/packages/${name}`,
              },
              {
                src: 'package.json',
                dest: `../../dist/packages/${name}`,
                transform: (contents) => {
                  const obj = JSON.parse(contents.toString());
                  delete obj.scripts;
                  return JSON.stringify(obj, null, 2);
                },
              },
            ],
          }),
          {
            name: 'remove-collection-handlers',
            transform(code, id) {
              if (id.endsWith('reactivity.esm-bundler.js')) {
                return code
                  .replace(`mutableCollectionHandlers,`, `null,`)
                  .replace(`readonlyCollectionHandlers,`, `null,`);
              }
            },
          },
        ],
      },
    },
  };
});
