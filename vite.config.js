import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          markdown: ['react-markdown', 'react-syntax-highlighter'],
          icons: ['react-icons'],
          styled: ['styled-components']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Minify for smaller bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components',
      'react-markdown',
      'react-syntax-highlighter'
    ]
  },
  // Enable compression
  server: {
    compress: true,
    host: true,
    port: 3000
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@data': resolve(__dirname, 'src/data')
    }
  }
})
