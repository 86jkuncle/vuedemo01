import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:10
  },
  mutations:{
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    }
  },
  actions:{
    incCount({commit}){
      commit("increment")
    },
    decCount({commit}){
      commit("decrement")
    }
  },
  getters:{
    mycount(state){
      return state.count
    }
  }

})
