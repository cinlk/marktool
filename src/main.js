import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import DeployApply from './components/deployApply.vue'

// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// Vue.use(iView)
import './common/iconfont.js'

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(VideoPlayer)
Vue.use(VueRouter)

const routers = [
  {path: '/', component: App},
  {path: '/deploy', component: DeployApply}

]
const router = new VueRouter({routers})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
