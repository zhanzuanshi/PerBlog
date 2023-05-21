import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入element-plus
import { globalRegister } from './pulgins/element-plus/element-plus'
import 'element-plus/dist/index.css'
const app=createApp(App)
app.use(store).use(router).mount('#app')
app.use(globalRegister)
