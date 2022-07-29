import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  Map from 'vue-amap'
import '@/vant/index.js';
import 'vant/lib/index.css';
Vue.use(Map);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
