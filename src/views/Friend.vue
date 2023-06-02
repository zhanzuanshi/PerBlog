<template>
    <Content :pageTitle="pageTitle">
        <a href="http://8.130.66.222:1111/" class="href">
                <div class="box">
                    <h1 class="title">书墨中文网</h1>
                    <p class="desc">我的小说网站项目</p>
                    <button class="btn">前去查看</button>

                </div>
            </a>
    </Content>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Content from '@/components/Content.vue';
const pageTitle='友情链接'
</script>

<style lang="less" scoped>

        .href {
            width: 400px;
            padding: 20px;
            margin: 0 20px;
            text-decoration: none;
            .box {
                padding: 20px;
                line-height: 50px;
                border-radius: 5px;
                justify-content: space-around;
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
</style>