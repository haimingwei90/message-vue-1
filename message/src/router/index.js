import Vue from 'vue'
import Router from 'vue-router'
import topindex from '@/components/TopIndex.vue';
import Topic from '@/components/Topic.vue';
import Bbs from '@/components/Bbs.vue';
import UserInfo from '@/components/nav-userbox-compt/UserInfo.vue';
import Loginbt from '@/components/nav-userbox-compt/Loginbt.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
     
      component:topindex
    },
    {
      path:'/topic',
      
      component:Topic
    },
    {
      path:'/bbs',
     
      component:Bbs
    },
    {
      path:'/userinfo',
     
      component:UserInfo
    },
    {
      path:'/loginbt',
     
      component:Loginbt
    },
  ]
})
