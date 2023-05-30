<template>
    <div>
       <Content :pageTitle="pageTitle">
       <router-link v-for="item in LabelList" :to={name:read,query:{label:item}}>
        <button class="btn">{{ item }}</button>
    </router-link>
    </Content>

       
    </div>
</template>

<script setup lang="ts">
import Content from '@/components/Content.vue';
import {getLabel} from '../api/getArticle'
import { onMounted ,ref,Ref} from 'vue';
import { read } from '@popperjs/core';
import {Label} from '../types/label'
const pageTitle='标签'
const labels:Ref<Label[]>=ref([])
const LabelList:Ref<Label[]|any>=ref([])
const  Format=()=>{
        labels.value.forEach((val)=>{
          const item:any[] = val.type.toString().split(',')
            LabelList.value.push(...item)
        })
        console.log(LabelList.value);
        
}
onMounted(async()=>{
        labels.value=await getLabel()
        console.log(labels.value);
        
        Format()
})
</script>

<style lang="less" scoped>
.btn{
    min-width: 100px;
    height: 40px;
    margin: 50px 10px;
    line-height: 30px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    background-color: antiquewhite;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>