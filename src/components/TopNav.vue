<template>
  <div class="top-nav">
    <div class="mobile" @click="show">
      <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" router>
      <el-menu-item class="mv-title">Diamond | 个人博客</el-menu-item>
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
    </el-menu>
    </div>
  <div class="box-shadow"></div>
    <div class="nav">
      <span class="mv-menu iconfont icon-caidan" @click="show">
      </span>
      <span class="mv-title">Diamond | 个人博客</span>
      <span></span>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
      <span class="title">Diamond | 个人博客</span>
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
const showMenu=ref('-100%')
const isScroll=ref('none')
const Opacity=ref(0)
const getRoutes = () => {
  activeIndex.value = route.path
}
const show=()=>{
  if(showMenu.value=='-100%'){
    Opacity.value=1
    showMenu.value='0%'
    isScroll.value='block'
  }else{
    Opacity.value=0
    showMenu.value='-100%'
    isScroll.value='none'
  }
}
onMounted(() => {
  getRoutes()

})
</script>
<style lang="less" scoped>
//导航栏占位
.top-nav{
  .box-shadow{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: v-bind(Opacity);
    height: 120vh;
    background-color: rgba(0,0,0,0.5);
    display: v-bind(isScroll);
    z-index: 2;
  } 
  .mobile{
  width: 100%;
  height: 100vh;
  position: fixed;
  transform: translateX(v-bind(showMenu));
  transition: transform .3s ease-in-out;
  z-index: 3;
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
    z-index: 2;
}
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
  z-index: 999;
  .title{
    font-weight: bolder;
    font-size: 30px;
    padding: 10px;
  }
}

.mv-title {
  font-size: 24px;
  font-weight: bolder;
  height: 70px;
  border: none;
  background-image: linear-gradient(to right, #5ab886 10%, #2881b8 90%);
  opacity: 1;
}

.flex-grow {
  flex-grow: 1;
}

@media screen and(max-width:900px) {
  .top-nav{
    .nav{
    display: flex;
  }
  }

  .mv-menu{
    font-size: 25px;
  }
  .el-menu-demo{
  display: none;
}
}

</style>