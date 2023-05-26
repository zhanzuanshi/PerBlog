import { createStore } from 'vuex'
export interface State{
  routesList:[]
}
 const store=createStore<State>({
  state: {
    routesList: []
  },
  getters: {
  },
  mutations: {
    getRoutes(state, val){
      state.routesList = val.value
      
    }
  },
  actions: {
    asyncRoutes({commit},data){
      commit('getRoutes',data)
    }
  },
  modules: {
  }
})
export function mystore(){
  return store
}
export default store