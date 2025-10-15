import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/potolki",
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.fbx'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
