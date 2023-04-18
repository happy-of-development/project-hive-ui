import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import bootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(bootstrapVue);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
