import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import FormView from '@/views/FormView.vue';
import HomeView from '@/views/HomeView.vue'
import PersonagemProfile from '@/views/personagem/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/app',
    name: 'app',
    component: App,
  },
  {
    path: '/form',
    name: 'form',
    component: FormView,
  }, 
  {
    path: '/profile/:id', 
    name: 'PersonagemProfile',
    component: PersonagemProfile,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
