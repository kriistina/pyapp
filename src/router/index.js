import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PorukeView from '@/views/OpythonuView.vue'
import KontaktView from '@/views/KontaktView.vue'
import FooterView from '@/views/FooterView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opythonu',
    name: 'opythonu',
    component: PorukeView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktView
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

routes.forEach(route => {
  route.components = route.components || {};
  route.components.FooterView = FooterView;
});

export default router
