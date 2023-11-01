import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart:['sofa']

  },
  getters: {
    getCartItems: state=>{
      return  state.itemsInCart;

    }
  },
  mutations: {
    addItemInCart: (state, payload) => {
      state.itemsInCart.push(payload) ;
    }
  },
  actions: {
  },
  modules: {
  }
})
