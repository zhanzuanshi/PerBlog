<template>
    <div class="main">
        <div class="top">
            <!-- <img src="https://api.cyrilstudio.top/bing/image.php" alt=""> -->
            <div class="container">
                <p class="title">Diamond</p>
                <span class="aWord">最可怕的不是有人比你优秀，而是比你优秀的人还比你更努力。</span>
            </div>
            <div class="conInfo">
                <a class="iconfont icon-github" href="https://github.com/zhanzuanshi"></a>
                <a class="iconfont icon-QQ"></a>
                <a class="iconfont icon-email-fill"></a>
            </div>
        </div>
        <div class="middle">
            <div class="box-content">
                <div class="Introduction">
                    <h1>简介</h1><br>
                    <span class="motto">你要努力成为梧桐，让喜鹊在这里栖息。你要努力成为大海，让百川在这里聚积。</span>
                </div>
                <div class="Announcement">
                    <h1>公告</h1><br>
                    <span class="anno">本博客所发布的各种软件文章仅限用于学习和研究目的；
                        任何人不得将上述内容用于商业或者非法用途，否则，一切后果请用户自负。
                        本站信息来自网络，版权争议与本站无关。您必须在下载后的24个小时之内，
                        从您的电脑中彻底删除上述内容。如果您喜欢该程序，请支持正版软件，
                        购买注册，得到更好的正版服务。如有侵权请邮件与我联系处理。
                    </span>
                </div>
                <div class="recomArticle">

                    <h1>文章推荐</h1>
                    <div class="article-box">
                        <div class="article" v-for="(item, index) in Articles" :key="index">
                            <router-link :to={name:read,query:{name:item.articleName}}>
                                <span class="title">{{ item.articleName }}</span>
                                <i class="lable">{{ item.articleLable }}</i>
                                <button class="btn">阅读更多</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { getArticle } from '../api/getArticle'
import { ArticleList } from '../types/articleList'
import { read } from '@popperjs/core';
let Articles: Ref<ArticleList[]> = ref([])
onMounted(async () => {
    Articles.value = await getArticle()
    // console.log(Articles);
    // return Articles
})
</script>

<style lang="less" scoped>
.main {
    .top {
            width: 100%;
            height: 100vh;
            background-image: url("https://api.cyrilstudio.top/bing/image.php");
            background-position: center center;
            background-size: cover;
        .container {
            color: white;
            position: absolute;
            top: 40%;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;

            .title {
                font-size: 70px;
            }

            .aWord {
                font-size: 20px;
            }
        }

        .conInfo {
            display: flex;
            color: white;
            justify-content: space-around;
            width: 30%;
            position: absolute;
            top: 70%;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;

            a {
                font-size: 2rem;
                color: aliceblue;
                text-decoration: none;
            }
        }
    }

    .box-content {
        width: 85%;
        height: 80%;
        text-align: center;
        background-color: whitesmoke;
        margin: 20px auto;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .Introduction {
            align-self: center;
            width: 80%;
            margin: 50px 0;

            .motto {
                font-size: 1.3rem;
            }
        }

        .Announcement {
            width: 60%;
            margin: 50px auto;

            .anno {
                font-size: 1.3rem;
                line-height: 40px;
            }
        }

        .recomArticle {
            overflow: hidden;

            .article-box {
                display: flex;
                justify-content: space-around;
                flex-flow: wrap;
                overflow: hidden;
                padding: 10px;
            }

            .article {
                background-image: url('../assets/img/Bg-content.jpg');
                background-position: 50% 50%;
                width: 500px;
                height: 300px;
                margin: 30px 0;
                padding: 30px 0;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                a {
                    text-decoration: none;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }

                .title {
                    color: aliceblue;
                    font-size: 1.8rem;
                    font-weight: bolder;
                    margin: 20px;
                }

                .lable {
                    color: beige;
                    margin: 20px;
                }

                .time {
                    color: black;
                }

                .btn {
                    align-self: center;
                    width: 6rem;
                    height: 3rem;
                    border-radius: 30px;
                    z-index: 1;
                    border: none;
                    color: white;
                    font-size: 1rem;
                    background: linear-gradient(to right, #faee87, #00BFFF);
                }
            }
        }

        .article::before {
            content: '';
            position: absolute;
            display: block;
            width: 500px;
            height: 300px;
            overflow: hidden;
            border-radius: 5px;
            background-color: black;
            opacity: 0.3;
        }
        @media screen and(max-width: 900px) {
            .article::before {
            content: '';
            position: absolute;
            display: block;
            width: 80%;
            height: 300px;
            overflow: hidden;
            border-radius: 5px;
            opacity: 0.3;
        }
        }
    }
}</style>