import request from "./axios";

export function sendComments(userInfo:{},comment:string){
    return request({
        method:'post',
        url:'/sendComment',
        data:{
           userInfo,
           comment
        }
    })
}
export function getComments(){
    return request({
        method:'get',
        url:'/comment'
    }).then((res)=>{
        return res.data
    })
}