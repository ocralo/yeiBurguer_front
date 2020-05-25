import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

import ModuleLogin from "./ModuleLogin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { login: false },
  mutations: {
    autenticationUser(state, evt) {
      evt.preventDefault();
      if (
        ModuleLogin.state.user.userName === "rodrigo" &&
        ModuleLogin.state.user.passwordUser === "123123123"
      ) {
        state.login = true;
        console.log(ModuleLogin.state.user);
        router.push("/home");
      }
    },
  },
  actions: {},
  modules: { ModuleLogin },
});
