import Vue from 'vue'
import App from './App.vue'
import components from "./components/all.js";
import main_storage from "./storage/main.js";

Vue.config.productionTip = false

for(let componentId in components) {
  Vue.component(componentId, components[componentId]);
}

Vue.prototype.$storage = main_storage.initialize();

new Vue({
  render: h => h(App),
}).$mount('#app')
