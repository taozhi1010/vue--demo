import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import ShopCarContainer from '@/components/tabbar/ShopCarContainer.vue'
import SearchContainer from '@/components/tabbar/SearchContainer.vue'
import NewsList from '@/components/new/NewsList.vue'
import NewsInfo from '@/components/new/NewsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/NewsInfo/:id', component: NewsInfo }
  ],
  linkActiveClass:"mui-active"
})
