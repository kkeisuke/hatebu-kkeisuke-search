import { Mutations } from 'vuex'
import { AlgoliaState, AlgoliaMutation } from './algolia'

const mutations: Mutations<AlgoliaState, AlgoliaMutation> = {
  SET_SEARCH_RESULTS(state, searchResults) {
    state.searchResults = searchResults || []
  },
  SET_IS_SEARCHED(state, isSearched) {
    state.isSearched = Boolean(isSearched)
  }
}

export default mutations
