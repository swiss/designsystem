import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({

  modules: {
    layout: {
      namespaced: true,
      state: require("../store/layout.js").state,
      getters: require("../store/layout.js").getters,
      actions: require("../store/layout.js").actions,
      mutations: require("../store/layout.js").mutations
    }
  }
});

export default store
