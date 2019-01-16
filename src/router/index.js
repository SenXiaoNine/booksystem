import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Shouye from '../components/shouye.vue'
import Shujifenlei from '../components/shujifenlei.vue'
import Shujipaihang from '../components/shujipaihang.vue'
import Shujituijian from '../components/shujituijian.vue'
import Zuozhefenlei from '../components/zuozhefenlei.vue'
import Search from '../components/search.vue'
import Result from '../components/result.vue'
import Detail from '../components/detail.vue'
import Catalog from '../components/catalog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouye',
      component: Shouye,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path:'/result/:id',
      component:Result, 
    },      
    {
      path: '/shujifenlei',
      component: Shujifenlei,
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
    {
      path: '/shujipaihang',
      component: Shujipaihang
    },
    {
      path: '/shujituijian',
      component: Shujituijian,
    },
    {
      path: '/zuozhefenlei',
      component: Zuozhefenlei,
    },
    {
      path:'/catalog/:productId',
      component:Catalog
    },
    {
      path: '*',
      redirect:'/shouye'
    }
  ]
})
