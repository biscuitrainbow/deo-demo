import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/style/tailwind.css";

import VueRouter from "vue-router";
import ContractCreate from "./components/contracts/ContractCreate";
import ContractList from "./components/contracts/ContractList";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Antd);

const routes = [
  { path: "/contract/create", component: ContractCreate },
  { path: "/contract/", component: ContractList}
];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
