import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Cook from './components/Cook.vue'
import EatWhat from './components/EatWhat.vue'
import Dish from './components/Dish.vue'

const routes = [
  { path: '/', name: 'cook', component: Cook },
  { path: '/eatwhat', name: 'eatwhat', component: EatWhat },
  { path: '/dish/:id', name: 'dish', component: Dish },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(ElementPlus).use(router).mount('#app')
