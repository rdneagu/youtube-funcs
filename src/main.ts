import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

require('./components/index.ts');
require('./directives/index.ts');

Vue.config.productionTip = false;

/* eslint consistent-return: 0 */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
