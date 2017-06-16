import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default function createStore() {
  return new Vuex.Store({
    state: {
      counter: 0,
    },
    actions: {
      inc({ commit }) {
        return commit('inc', 1);
      },
    },
    mutations: {
      inc(state, number) {
        Vue.set(state.counter, number);
      },
    },
    strict: debug,
  });
}
