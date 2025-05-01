import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importar el router

const app = createApp(App)
app.use(router) // Se encarga de instalar el router
app.mount('#app')