import axios  from 'axios'

const  request = axios.create({
    baseURL:'/api',
    timeout:3000,

    
})
axios.interceptors.request.use((config)=>{
return config
}),(err: any)=>{
    return Promise.reject(err)
    
}
axios.interceptors.response.use((response)=>{
    return response
}),(err: any)=>{
    return Promise.reject(err)
}
export default request
