<template>
    <div class="brand">
        <div class="bg-cover">
            <span class="title">{{pageTitle}}</span><br>
            <p v-if="DaliWord" class="dailword">{{ DaliWord }}</p>
        </div>
        <div class="card">
            <slot></slot>
        </div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
let DaliWord = ref('')
defineProps({
    pageTitle:String,
    default:()=>{
        return ''
    }
})
onMounted(() => {
    axios({
        method: 'get',
        url: 'https://saying.api.azwcl.com/saying/get'
    }).then((res) => {
        DaliWord.value = res.data.data.content

    })
})

</script>

<style lang="less" scoped>
.brand {
    position: absolute;
    top: 70px;
    left: 50%;
    width: 100%;
    transform: translate(-50%);
    height: 50px;
    line-height: 50px;
    color: white;
    z-index: -1;

    .bg-cover {
        height: 50vh;
        background-image: url('https://api.cyrilstudio.top/bing/image.php');
        background-position: center center;
        background-size: cover;
        display:flex;
        flex-direction: column;
        justify-content: center;
        
        .title{
            font-size: 2rem;
            font-weight: bolder;
        }
        .dailword {
        font-size: 18px;
    }
    }
    .card {
        width: 90%;
        position: absolute;
        padding: 10px;
        top: 45vh;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: white;
        min-height: 40vh;
        border-radius: 15px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        
    }


}</style>