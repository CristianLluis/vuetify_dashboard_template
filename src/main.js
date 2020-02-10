import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/vuse";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { createI18n } from "./i18n/index";

Vue.config.productionTip = false;

const i18n = createI18n();

// let count = 0;
// Vue.mixin({
//   created() {
//     console.log(++count);
//   },
//   destroyed() {
//     console.log(--count);
//   }
// });

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
