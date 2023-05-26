
const bodyParser=require('body-parser')

const express=require('express')  //引入express

const connection=require('../mysql/db')  //获取连接池

const {port}=require('../mysql/config')   //获取启动参数

const app=express()  //创建express实例

const jsonParser=bodyParser.json()

// 获取文章
app.get('/articles',jsonParser,(req,res)=>{
    const params=req.query
    console.log(params);
    let sel_sql='select * from blog_article'
    if(params.name){
        sel_sql='select * from blog_article where articleName=?'
    }
    
    connection.query(sel_sql,params.name,(err,data)=>{
        if(err){
            console.log(err);
            
        }else{
            res.send(data)
        }
    })
})
// 获取标签
app.get('/lables',jsonParser,(req,res)=>{
    const sel_sql='select articleType as type from blog_article'
    connection.query(sel_sql,(err,data)=>{
        if(err){
            console.log(err);
            
        }else{
            res.send(data)
        }
    })
})

// 端口监听
app.listen(port,() => {
    console.log(`express server listen at http://localhost:${port}`)
})
