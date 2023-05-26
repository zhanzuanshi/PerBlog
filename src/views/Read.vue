<template>
    <div class="read" v-for="item in Article" >
        <div class="brand">
            <h1>{{ item.articleName }}</h1>
        </div>
        <div class="container">
            <div class="detail">
                <span>发布日期：{{ item.articleTime }}</span>
                <span>标签：{{ item.articleLable }}</span>
            </div>
            <div class="content" v-html="item.articleContent">
                
            </div>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import {ref,Ref,onMounted} from 'vue'
import { getArticle } from '../api/getArticle'
import { ArticleList } from '../types/articleList'
import { useRoute } from 'vue-router';
const route=useRoute()
let Article: Ref<ArticleList[]> = ref([])
// const test=async()=>{
//   const res=  await getArticle(route.query.name)
//     console.log(res);
    
// }
onMounted(async () => {
    Article.value = await getArticle(route.query.name)
    console.log(Article.value);
})
</script>

<style lang="less" scoped>
.read{
   
    .brand{
        position: absolute;
        top: 70px;
        left: 50%;
        transform: translate(-50%);
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        position: absolute;
        height: 80px;
        line-height: 80px;
        color: white;
    }
    .container{
        position: absolute;
        top: 150px;
        left: 50%;
        width: 80%;
        z-index: -1;
        border-radius: 10px;
        transform: translate(-50%);
        min-height: calc(100vh - 140px);
        background-color: white;
        .detail{
            width: 80%;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: gray;
            display: flex;
            justify-content: space-around;
            }
            .content{
                border-top: 1px solid rgb(180, 180, 180);
                padding:50px 50px;
                text-align: left;
                line-height: 35px;
            }
    }
}
</style>