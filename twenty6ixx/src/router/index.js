import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import vSelect from 'vue-select'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.use(Router)
Vue.component('v-select', vSelect)
Vue.component('multiselect', Multiselect)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
