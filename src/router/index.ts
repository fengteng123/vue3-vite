import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from "../view/home.vue"
import Front from '../view/front.vue'
import Shopingclassify from '../view/shopingclassify.vue'
import Shoping from '../view/shoping.vue'
import My from '../view/my.vue'
import AccountNumber from '../view/accountNumber.vue'


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
    path: '/accountNumber',
    name: 'AccountNumber',
    component: AccountNumber,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router 