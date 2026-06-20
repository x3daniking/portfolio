import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project page lives at https://x3daniking.github.io/portfolio/
// If you ever move it to the user root (x3daniking.github.io), set base: '/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
