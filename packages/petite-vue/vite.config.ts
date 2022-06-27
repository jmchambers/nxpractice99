import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  esbuild: {
    minify: true,
  },
  build: {
    outDir: '../../dist/packages/petite-vue',
    emptyOutDir: false,
    sourcemap: true,
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PetiteVue',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `runtime.${process.env.MODE}.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        tsconfigPaths({
          root: '../..',
        }),
        // {
        //   name: 'remove-collection-handlers',
        //   transform(code, id) {
        //     if (id.endsWith('reactivity.esm-bundler.js')) {
        //       return code
        //         .replace(`mutableCollectionHandlers,`, `null,`)
        //         .replace(`readonlyCollectionHandlers,`, `null,`);
        //     }
        //   },
        // },
      ],
    },
  },
});
