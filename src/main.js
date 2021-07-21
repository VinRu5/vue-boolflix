import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Dayjs from 'vue-dayjs';
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Dayjs, {
  lang: 'en',
  filters: {
    ago: 'ago',
  },
  directives: {
    countdown: 'countdown'
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
