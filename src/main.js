import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 //3:引入VueResource 到当前项目中
 import VueResource from "vue-resource"
 //4:加载(注册)VueResource
 Vue.use(VueResource)
 //7:设置全局ajax post 访问格式
 //6:设置全局ajax访问基础路径
 Vue.http.options.root = "http://127.0.0.1:3000/";
 Vue.http.options.emulateJSON = true;