import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/input.css"
import router from "./router/index.js"

createApp(App)
  .use(router)
  .mount('#app')
