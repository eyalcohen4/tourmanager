import Vue from 'vue';
import Register from '@/containers/Register';

describe('Register.vue', () => {
  it('should render form with two inputs', () => {
    const Constructor = Vue.extend(Register);
    const vm = new Constructor().$mount();
    const email = vm.$el.querySelector('#register-email');
    const password = vm.$el.querySelector('#register-password');

    expect(email).to.exist;
    expect(password).to.exist;
  });
});
