const state = {
  isSignIn: false,
  user: null,
};

const getters = {
  user: currentState => currentState.user,
  isSignIn: currentState => currentState.isSignIn,
};

export default {
  state,
  getters,
};
