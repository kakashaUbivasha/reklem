import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
const app = createApp(App)
app.use(VueTelInput)
app.mount('#app')
