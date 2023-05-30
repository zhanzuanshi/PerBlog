import request from "./axios";
// 获取所有文章
  export function getArticle(articleName?:any,articleLable?:any){
        return request({
            method:'get',
            url:`/articles`,
            params:{
                articleName:articleName,
                articleLable:articleLable
            }
        }).then((res)=>{
                    return res.data
        })
  }

// 按照参数获取文章


// 获取所有分类
export function getLabel(){
    return request({
        method:'get',
        url:'/labels'
    }).then((res)=>{
        return res.data
    })
}