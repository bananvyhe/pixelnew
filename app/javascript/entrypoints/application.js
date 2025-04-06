// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
console.log('Vite ⚡️ Rails')
import { createApp, inject } from 'vue/dist/vue.esm-bundler';
import App from './app.vue'
// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>
import '../styles/variables.scss'

console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')
import { securedAxiosInstance, plainAxiosInstance } from '../backend/axios'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Notifications from '@kyvg/vue3-notification'
import VueAxios from 'vue-axios'

const pinia = createPinia()
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
})
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})
app.provide('plain', app.config.globalProperties.plain) 
app.provide('secured', app.config.globalProperties.secured) 
app.provide('axios', app.config.globalProperties.axios)
app.use(Notifications)
app.use(router)
app.use(pinia)
app.use(vuetify);
app.mount('#app');
console.log("app", app);

 
 
// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'
