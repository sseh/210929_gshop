import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',
    },
    {
      path: '/msite',
      component: Msite,
      meta: { showFooter: true },
    },
    {
      path: '/search',
      component: Search,
      meta: { showFooter: true },
    },
    {
      path: '/order',
      component: Order,
      meta: { showFooter: true },
    },
    {
      path: '/profile',
      component: Profile,
      meta: { showFooter: true },
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        { path: 'goods', component: ShopGoods },
        { path: 'info', component: ShopInfo },
        { path: 'ratings', component: ShopRatings },
        {
          path: '',
          redirect: 'goods',
        },
      ],
    },
  ],
})
