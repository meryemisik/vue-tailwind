import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css';
import './asset/scss/global.css'
import store from "./store/store";
import router from "./router/router"; // Vue Router'ı içe aktarın

const app = createApp(App);
app.use(store);
app.use(router); // Vue Router'ı kullanıcı hizmetine ekleyin
app.mount("#app");