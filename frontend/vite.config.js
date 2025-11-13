import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add this 'preview' section
  preview: {
    port: process.env.PORT,
    host: '0.0.0.0',
    allowedHosts: [
      // Your NEW Frontend URL (from the error)
      'treevisuals-production.up.railway.app', 
      
      // Your Backend URL
      'easygoing-enchantment-production-3a1f.up.railway.app'
    ]
  }
})