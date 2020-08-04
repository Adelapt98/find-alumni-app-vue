import Vue from 'vue'
import App from './App.vue'

import VueFormGenerator from 'vue-form-generator'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

import router from './router'

Vue.use(VueToast);

Vue.use(VueFormGenerator);

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      get serverAddress() {
        return "https://localhost:2000/api/";
      }
    }
  }
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
