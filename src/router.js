import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "./components/tabbar/HomeContainer.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
  ]
})
