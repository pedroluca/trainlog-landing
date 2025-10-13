import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  
  plugins: [
    react(),
  ],
  
  build: {
    // Reduce chunk size for better loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        },
        // Add async/defer attributes
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    
    // Enable minification (esbuild is faster than terser)
    minify: 'esbuild',
    
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Source maps only for debugging (disable in production)
    sourcemap: false,
    
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // Target modern browsers for smaller bundle
    target: 'es2015',
    
    // Enable module preload for faster loading
    modulePreload: {
      polyfill: false, // Don't include polyfill if targeting modern browsers
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
