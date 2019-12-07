import { Mutations } from 'vuex'
import { AlgoliaState, AlgoliaMutation } from './algolia'

const mutations: Mutations<AlgoliaState, AlgoliaMutation> = {
  SET_SEARCH_RESULTS(state, searchResults) {
    state.searchResults = searchResults || []
  }
}

export default mutations
