import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
    vuetify({ 
      autoImport: true,
      styles: { configFile: path.resolve(__dirname, 'app/javascript/styles/variables.scss') },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/javascript'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        
      },
    },
  },
})
