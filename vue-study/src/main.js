// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Vuerousourse
import VueResource from 'vue-resource'
Vue.use(VueResource)

import MintUI from 'mint-ui'   //引入mint-ui
import 'mint-ui/lib/style.css'  //
Vue.use(MintUI)  //注册mint-ui

import './assets/mui/css/mui.min.css'//引入muicss样式 有兼容问题需要调试
import './assets/mui/css/icons-extra.css'   //mui扩展icon图标  
// import './assets/mui/fonts/mui-icons-extra.ttf'

//引入时间过滤器
import moment from 'moment'  
//
Vue.config.productionTip = false
Vue.http.options.root="http://027xin.com:8899"

//时间全局过滤器  
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern)
})

Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
