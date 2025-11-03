import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'
import '@/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VCalendar, {})

app.mount('#app')
