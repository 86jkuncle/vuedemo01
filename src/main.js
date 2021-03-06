import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import List from './components/List'
import Other from './components/Other'
import store from './store'
import Lo from "./components/Lo"
import Antd from 'ant-design-vue'
import Layer from './components/Layer'
import 'ant-design-vue/dist/antd.css'
import Login from './components/Login'

import Table from './components/Table'
import SimpleTable from './components/SimpleTable'



Vue.use(Antd)
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/list', component: List },
  {path:'/a',component:Other},
  {path:'/lo',component:Lo},
  {path:'/layer',component:Layer},
  {path:'/login',component:Login},
  {path:'/table',component:Table},
  {path:'/stable',component:SimpleTable}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.filter('toUpperCase',function(value){
  return value.toUpperCase();
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
