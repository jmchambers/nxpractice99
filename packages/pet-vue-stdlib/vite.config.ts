import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  esbuild: {
    minify: true,
  },
  build: {
    outDir: '../../dist/packages/pet-vue-stdlib',
    emptyOutDir: false,
    sourcemap: true,
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PetVueStdlib',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `pet-vue-stdlib.${process.env.MODE}.${format}.js`,
    },
    rollupOptions: {
      plugins: [
        tsconfigPaths({
          root: '../..',
        }),
      ],
    },
  },
});
