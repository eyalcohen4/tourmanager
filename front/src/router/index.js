import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'Hello',
      component: Hello,
    }],
  });
};
