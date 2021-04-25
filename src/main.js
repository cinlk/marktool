import Vue from 'vue'
import MetaInfo from 'vue-meta-info'
import App from './App.vue'
import router from './router'


// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// Vue.use(iView)
import './common/iconfont.js'

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'


import SIdentify from './components/code'
Vue.component('s-identify', SIdentify)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(MetaInfo)
Vue.use(VideoPlayer)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
