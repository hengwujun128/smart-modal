import Vue from 'vue'
import App from './App.vue'

// third party lib
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";


// import SModal from "../src/main.js";
import SModal from "../dist/smartModal.min.js";

Vue.use(SModal);
// Vue.use(ElementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')