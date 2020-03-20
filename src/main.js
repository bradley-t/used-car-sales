import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./assets/mock_data.json";
let data = {
  vehicles: mock,
  compare: []
};
let methods = {
  name(vehicle) {
    return vehicle.year + " " + vehicle.make + " " + vehicle.model;
  }
};

new Vue({
  router,
  data,
  methods,
  render: h => h(App)
}).$mount("#app");
