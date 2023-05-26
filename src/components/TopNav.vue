<template>
  <div class="top-nav">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    router
  >
    <el-menu-item  class="title">Diamond | 个人博客</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item v-for="(item,index) in menu" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
  </el-menu>
  </div>
   
</template>

<script setup lang="ts">
import {MenuListItem} from '../types/menuList'
import { PropType, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
defineProps({
  menu:Array as PropType<MenuListItem[]>,
  default:()=>{
    return[]
  }
})
const activeIndex = ref('')
const route=useRoute()

const getRoutes=()=>{
activeIndex.value=route.path
}
onMounted(()=>{
 getRoutes()
  
})
</script>

<style lang="less" scoped>
//导航栏占位
// .top-nav{
//   height: 70px;
// }
.el-menu-demo{
    position: fixed;
    height: 70px;
    width: 100%;
    opacity: 0.7;
    background-color: whitesmoke;
    // background: transparent;
    border: none;
}
.title{
  font-size:24px;
  font-weight: bolder;
}
.flex-grow {
  flex-grow: 1;
}
</style>