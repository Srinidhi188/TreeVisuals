import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Add this 'preview' section
  preview: {
    port: process.env.PORT, // Use the $PORT variable from Railway
    host: '0.0.0.0',       // Listen on all addresses
    allowedHosts: [
      'treevisuals-production.up.railway.app' // Add your Railway URL here
    ]
  }
})