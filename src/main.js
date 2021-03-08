import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { DetailPage, MainPage } from './pages';


Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/detail',
    component: DetailPage
  }
];


const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
