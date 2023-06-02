<template>
  <div class="top-nav">
    <div class="mobile" @click="hide">
      <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" router>
      <el-menu-item class="title">Diamond | 个人博客</el-menu-item>
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
    </el-menu>
    </div>
  
    <div class="nav">
      <span class="mv-menu iconfont icon-caidan" @click="show">
      </span>
      <span class="mv-title">Diamond | 个人博客</span>
      <span></span>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
      <el-menu-item class="title">Diamond | 个人博客</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { MenuListItem } from '../types/menuList'
import { PropType, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
defineProps({
  menu: Array as PropType<MenuListItem[]>,
  default: () => {
    return []
  }
})
const activeIndex = ref('')
const route = useRoute()
const showMenu=ref('none')
const isScroll=ref('none')
const getRoutes = () => {
  activeIndex.value = route.path
}
const show=()=>{
  showMenu.value='block'
  isScroll.value='hidden'
}
const hide=()=>{
  showMenu.value='none'
  isScroll.value='none'
}
onMounted(() => {
  getRoutes()

})
</script>
<style lang="less" scoped>
//导航栏占位
.top-nav{
  overflow: v-bind(isScroll);
}
.mobile{
  width: 100%;
  height: 100vh;
  display:v-bind(showMenu);
  transition:all
}
.nav{
    position: fixed;
    width: 100%;
  display: none;
  justify-content: space-around;
  height: 70px;
  font-size: 20px;
  font-weight: bolder;
  line-height: 80px;
  background-image: linear-gradient(to right, #5ab886 10%, #2881b8 90%);
    opacity: 0.8;
}
.el-menu-vertical-demo{
  width: 65%;
  height: 100vh;
  opacity: 0.8;
  position: relative;
  z-index: 1;
}
.el-menu-demo {
  position: fixed;
  height: 70px;
  width: 100%;
  opacity: 0.7;
  background-color: whitesmoke;
  border: none;
}

.title {
  font-size: 24px;
  font-weight: bolder;
}

.flex-grow {
  flex-grow: 1;
}

@media screen and(max-width:376px) {
  .nav{
    display: flex;
  }
  .mv-menu{
    font-size: 25px;
  }
  .el-menu-demo{
  display: none;
}
}

</style>