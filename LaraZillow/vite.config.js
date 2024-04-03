import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      ziggy: path.resolve(__dirname, 'vendor/tightenco/ziggy'),
    },
  },
})
