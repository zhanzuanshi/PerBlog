import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routerListType } from '@/types/routerList'
import NavList from '../pulgins/navList'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      
    ]
  },
]
let routerList:routerListType=[]

routes[0].children?.push(

)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
