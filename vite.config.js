import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [react()],
  base: '/space-cakes/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  resolve: {
    alias:{
      '~': path.resolve(__dirname,'./src')
    }
  }
})
