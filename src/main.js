import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Vuetify, { theme: {
  primary: colors.purple.base,
  secondary: colors.grey.darken1,
  accent: colors.shades.black,
  error: colors.red.accent3
}
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
