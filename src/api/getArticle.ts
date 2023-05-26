import request from "./axios";
// 获取所有文章
  export function getArticle(articleName?:any){
        return request({
            method:'get',
            url:`/articles`,
            params:{
                name:articleName
            }
        }).then((res)=>{
                    return res.data
        })
  }

// 按照参数获取文章


// 获取所有分类
export function getLable(){
    return request({
        method:'get',
        url:'/lables'
    }).then((res)=>{
        return res.data
    })
}