import { Actions } from 'vuex'
import { searchAlgolia } from '@/plugins/api'
import { AlgoliaState, AlgoliaAction, AlgoliaGetter, AlgoliaMutation } from './algolia'

const actions: Actions<AlgoliaState, AlgoliaAction, AlgoliaGetter, AlgoliaMutation> = {
  async search({ commit }, query) {
    if (!query.trim()) {
      commit('SET_SEARCH_RESULTS')
      return
    }
    const data = await searchAlgolia(query.trim())
    commit('SET_SEARCH_RESULTS', data)
  }
}

export default actions
