import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import { AlgoliaState } from './algolia'

const state: AlgoliaState = {
  searchResults: [],
  isSearched: false
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
