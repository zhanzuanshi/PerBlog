<template>
   <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item v-for="(item,index) in menu" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import {MenuListItem} from '../types/menuList'
import { PropType, onMounted, ref } from 'vue'
defineProps({
  menu:Array as PropType<MenuListItem[]>,
  default:()=>{
    return[]
  }
})
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
onMounted(()=>{
  // console.log(menuList);
  
})
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>