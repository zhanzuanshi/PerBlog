import { App } from 'vue'
import registerElement from './registerElment'
export function globalRegister(app: App): void {
  app.use(registerElement)
}
// 导出element-plus