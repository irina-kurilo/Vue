import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/dark/css-vars.css';
import '@/styles/style-main.css';
import '@/styles/pokemon.css';
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '@/router/index.js'
import Vuex from 'vuex'
import store from '@/store/index.js'

const app = createApp(App)
app.use(Vuex)
app.use(store)
app.use(VueSnap)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(router)
app.mount("#app")
