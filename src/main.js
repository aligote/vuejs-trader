import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import {routes} from './routes';
import store from './components/store/store';

Vue.use(VueRouter); // Подключаем роутинг
Vue.use(VueResource); // Подключаем $http

Vue.http.options.root = 'https://vuejs-http-ba995.firebaseio.com/';

// Создаем и настраиваем роутинг
const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.filter('currency', value => '$' + value.toLocaleString());

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
