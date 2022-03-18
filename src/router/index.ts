import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from "../view/home.vue"
import Front from '../view/frontceshi.vue'
import Shopingclassify from '../view/shopingclassify.vue'
import Shoping from '../view/shoping.vue'
import My from '../view/my.vue'
import AccountNumber from '../view/accountNumber.vue'
import MyOrder from '../view/myOrder.vue'
import User from '../view/user.vue'
import CommodityDetails from '../view/commodityDetails.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  
  {
    path: '/home',
    name: 'home',
    redirect: '/front',
    component: Home,
    children: [
      {
        path: '/front',
        name: 'front',
        component: Front,
      },
      {
        path: '/shopingclassify',
        name: 'shopingclassify',
        component: Shopingclassify,
      },
      {
        path: '/shoping',
        name: 'shoping',
        component: Shoping,
      },
      {
        path: '/my',
        name: 'my',
        component: My,
      },
    ]
  },
  {
    path: '/accountNumber/:type',
    name: 'AccountNumber',
    component: AccountNumber,
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: MyOrder,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/commodityDetails',
    name: 'commodityDetails',
    component: CommodityDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router 