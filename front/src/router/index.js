import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/containers/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Register,
    },
  ],
});
