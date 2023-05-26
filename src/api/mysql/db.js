const mysql=require('mysql')

const config=require('./config').db  //获取数据库相关配置


module.exports=mysql.createPool(config)  //创建连接实例