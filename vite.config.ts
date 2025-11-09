import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Content Security Policy - Allow Dify Chatbot
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://udify.app https://*.udify.app https://*.dify.ai https://*.dify.dev https://*.r2.cloudflarestorage.com https://*.sentry.io https://*.googletagmanager.com https://www.google-analytics.com https://analytics.google.com data: blob:; style-src 'self' 'unsafe-inline' https://udify.app https://*.udify.app https://*.dify.ai; img-src 'self' data: blob: https://udify.app https://*.udify.app https://*.dify.ai https://*.r2.cloudflarestorage.com; font-src 'self' data: https://udify.app https://*.udify.app; connect-src 'self' https://udify.app https://*.udify.app https://*.dify.ai https://*.dify.dev https://api.dify.ai https://*.sentry.io wss://*.udify.app ws://localhost:* ws://127.0.0.1:*; frame-src 'self' https://udify.app https://*.udify.app; frame-ancestors 'self';"
    }
  }
})


