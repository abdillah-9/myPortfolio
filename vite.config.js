import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // IMPORTANT: add your subdirectory here
  plugins: [react()]
})
