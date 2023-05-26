
// 在这里引入需要的组件
import {
    ElContainer,
    ElButton,
    ElHeader,
    ElAside,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
  } from "element-plus";
import { App } from "vue";
  let components = [
    ElContainer,
    ElButton,
    ElHeader,
    ElAside,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
  ];
  // 注册组件
  export default function (app:App): void {
    for (const component of components) {
      app.component(component.name, component)
    }
  }

  