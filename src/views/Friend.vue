<template>
    <div class="brand">
        <div class="bg-cover">
            <h1>友情链接</h1><br>
            <p v-if="DaliWord" class="dailword">{{ DaliWord }}</p>
        </div>
        <div class="card">
            <a href="http://8.130.66.222:1111/" class="href">
                <div class="box">
                    <h1 class="title">书墨中文网</h1>
                    <p class="desc">我的小说网站项目</p>
                    <button class="btn">前去查看</button>

                </div>
            </a>
        </div>

    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
let DaliWord = ref('')
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
        height: 60vh;
        background-image: url('https://api.cyrilstudio.top/bing/image.php');
        background-position: center center;
        background-size: cover;
    }

    .dailword {
        font-size: 18px;
    }

    .card {
        width: 80%;
        position: absolute;
        top: 140px;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        justify-content: space-around;
        background-color: white;
        height: calc(100vh - 150px);
        border-radius: 15px;

        .href {
            margin: 20px;
            text-decoration: none;

            .box {
                width: 400px;
                height: 200px;
                padding: 20px;
                line-height: 50px;
                border-radius: 5px;
                box-shadow: 3px 3px 1px 1px #c6c6c6;
                background: linear-gradient(to right, #faee87, #00BFFF);

                .title {
                    color: white;
                    border-bottom: 4px solid white;
                }

                .desc {
                    font-size: 16px;
                    color: aliceblue;
                }

                .btn {
                    width: 100px;
                    height: 40px;
                    border-radius: 15px;
                    border: none;
                    color: white;
                    background: linear-gradient(to right, #faee87, #00BFFF);
                }
            }
        }
    }


}</style>