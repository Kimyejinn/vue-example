export const sample = {
  /*
    namespaced가 true일 때 사용방법
    state: state.모듈네임.스테이트네임
    getters: computed(()=> store.getters["모듈네임/게덜네임"])
    mutation: store.commit("모듈네임/뮤테이션네임",params)
    action: store.dispatch("모듈네임/액션네임",params)
    */
  namespaced: true,
  state: { counter: 10 },
  getters: {
    doubleValue(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    //동기
    setCounter(state, value) {
      state.counter = value;
    },
    incrementCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      if (state.counter == 0) {
        alert("최소값은 0입니다.");
      } else {
        state.counter--;
      }
    },
  },
  actions: {
    //비동기
    increment({ commit }) {
      commit("incrementCounter");
    },
  },
};
