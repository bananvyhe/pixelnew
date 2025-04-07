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
import { createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Notifications from '@kyvg/vue3-notification'
import VueAxios from 'vue-axios'
const pinia = createPinia()
const app = createApp(App);

const customDarkTheme = {
  dark: true,
  colors: {
     // background: "#adaada",
    // background: "#15202b",
    // surface: "#15202b",
     
 
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#ff5722",
  },
};
const customLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme:  'customLightTheme',
    themes: {
      customDarkTheme,
      customLightTheme,
    },
  },
 
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
