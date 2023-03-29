import { createApp } from 'vue'
import './assets/css/public.scss'
import App from './App.vue'
import router from "./router";
import { setupGlobDirectives } from './directives'

const app = createApp(App)

setupGlobDirectives(app)

app.use(router).mount('#app')
