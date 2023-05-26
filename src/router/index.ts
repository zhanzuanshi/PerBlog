import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routerListType } from '@/types/routerList'
import routerList from '../pulgins/navList'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      
    ]
  },
]
// const store=mystore()
// console.log(routesList);
const routesList=routerList
  routesList.forEach((val:routerListType) => {
    const childrenList={
      path:val.path,
      name:val.name,
      component:()=>import(`../views/${val.component}.vue`),
      children:val.children
    }
    routes[0].children?.push(
      childrenList
    )
    
  });

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
