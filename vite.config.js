import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('/firebase/') || id.includes('\\firebase\\')) return 'firebase';
          if (id.includes('/react') || id.includes('\\react')) return 'react';
          if (
            id.includes('/lucide-react/') ||
            id.includes('\\lucide-react\\') ||
            id.includes('/swiper/') ||
            id.includes('\\swiper\\') ||
            id.includes('/zustand/') ||
            id.includes('\\zustand\\')
          ) {
            return 'ui';
          }
        }
      }
    }
  }
})
