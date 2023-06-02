<template>
    <div>
        <TopNav :menu="menuList"></TopNav>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { mystore } from '@/store'
import {MenuListItem} from '../types/menuList'  //菜单表类型
import NavList from '../pulgins/navList'
import TopNav from '@/components/TopNav.vue';
const store=mystore()
const navList=ref(NavList)
let  menuList: Array<MenuListItem>=[]
const getMenu=()=>{
  navList.value.forEach((val)=>{
    if(val.meta.title){
        let obj:MenuListItem={
        title:val.meta.title,
        path:val.path,
        icon:val.meta.icon
    }
    menuList.push(obj)
    }
    
    return menuList
  })
   console.log(menuList);
   
}
const sendRoutesList=()=>{
        store.dispatch('asyncRoutes',navList)
}
onMounted(()=>{
        getMenu()
        sendRoutesList()
    })
</script>
<style scoped>

</style>