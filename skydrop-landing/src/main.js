// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Materials from 'vue-materials'
import VeeValidate from 'vee-validate'
import es from 'vee-validate/dist/locale/es'
import VueSweetAlert from 'vue-sweetalert'
import VueProgressBar from 'vue-progressbar'

Vue.use(Materials)
Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: {
    es
  }
})
Vue.use(VueSweetAlert)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
