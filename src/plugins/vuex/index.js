import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/store/index'

Vue.use(Vuex)

const store = new Vuex.Store(storage)

export default store
