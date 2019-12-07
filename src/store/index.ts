import Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)

import hatebuSearch from './modules/hatebu-search'
import algolia from './modules/algolia'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    hatebuSearch,
    algolia
  }
}) as Vuex.ExStore

export default store
