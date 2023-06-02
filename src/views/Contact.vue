<template>
    <div>
<Content :pageTitle="pageTitle">
<div class="contact">
    <span class="title">留言</span>
</div>
<div class="content">
    <div class="userInfo">
        <input type="text" placeholder="昵称" v-model="userInfo.userName">
        <input type="text" placeholder="邮箱" v-model="userInfo.userEmail">
        <input type="text" placeholder="网址" v-model="userInfo.userUrl">
    </div>
    <div class="comment" contenteditable="true" placeholder="欢迎留言" v-text="comment" @blur="getComment($event)">
        
    </div>
    <div class="validate">
        <button class="btn" @click="submitComment">留言</button>
    </div>
    <div class="stacom">{{ stacom }}条评论</div>
    <div class="showComment" v-for="item in comList">
        <div class="left">
          <img src="../assets/img/BackGround.jpg" alt="头像" class="headImg">
        </div>
        <div class="right">
            <span class="username">{{item.user_name}}</span>
            <span class="time">{{formatTime(item.user_id)}}</span>
            <p class="userComment">{{item.user_contact}}</p>
        </div>
    </div>
</div>
</Content>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref,Ref } from 'vue';
import Content from '@/components/Content.vue';
import {sendComments,getComments} from '../api/getComment'
import { comList} from '../types/commentList'
const pageTitle='留言板'
const userInfo=ref({
    userName:'',
    userEmail:'',
    userUrl:''
})
const comList:Ref<comList[]>=ref([])
const comment=ref('')
const stacom=ref(0)
const getComList=async()=>{
        const res: comList[]=await getComments()
        comList.value=res.reverse()
        stacom.value=comList.value.length
        console.log(comList.value);
}
// 内容绑定事件
const getComment=function(val:FocusEvent){
    comment.value=(val.target as HTMLElement).innerText
}
const submitComment=()=>{
        console.log(userInfo.value,comment.value);
        sendComments(userInfo.value,comment.value)
        getComList()
}
const formatTime=(val: string | number | Date)=>{
    const date = new Date(val); // 创建一个 Date 对象
    return date.toLocaleString(); // 将 Date 对象转换为本地标准时间字符串
}
onMounted(()=>{
    getComList()
})
</script>

<style lang="less" scoped>
.contact{
    width: 100%;
    height: 50px;
    .title{
        position: absolute;
        top: 10px;
        left: 10px;
        color: black;
        font-weight: bolder;
    }
}
.content{
    padding: 10px;
    margin: 10px;
    width: 100%;
    border:  1px solid rgb(188, 188, 188);
    border-radius: 10px;
    .userInfo{
        display: flex;
        flex-wrap: wrap;
    justify-content: space-between;
    input{
        width: 400px;
        height: 50px;
        border: none;
        outline: none;
        border-bottom: 1px dashed rgb(188, 188, 188);
    }
    input:focus{
        border-bottom: 1.5px solid green;
        transition: all .3s;
    }
    }
    .comment{
        text-align: left;
        color: black;
        width: 100%;
        min-height: 100px;
        outline: none;
    }
    .comment:empty::before{
        color: rgb(184, 184, 184);
    content: attr(placeholder);
    }
    .validate{
        text-align: right;
        border-bottom: 1px dashed gray;
        .btn{
            border: none;
            width: 100px;
            height: 30px;
            color: gray;
            border-radius: 5px;
            font-size: 16px;
            
        }
    }
    .stacom{
           text-align: left;
           color: gray;
    }
    .showComment{
        display: flex;
        color: black;
        border-bottom: 1px dashed grey;
        .left{
            width: 100px;
            line-height:170px;
            .headImg{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .right{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 10px;
            justify-content: space-around;
            .username{
                color: #4dc032;
            }
            .time{
                color: gray;
                font-size: 12px;
            }
        }
    }
}
</style>