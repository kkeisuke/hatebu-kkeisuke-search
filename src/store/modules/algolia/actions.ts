import { Actions } from 'vuex'
import { searchAlgolia } from '@/plugins/api'
import { AlgoliaState, AlgoliaAction, AlgoliaGetter, AlgoliaMutation } from './algolia'

const actions: Actions<AlgoliaState, AlgoliaAction, AlgoliaGetter, AlgoliaMutation> = {
  async search({ commit }, query) {
    if (!query.trim()) {
      commit('SET_SEARCH_RESULTS')
      return
    }
    try {
      commit('SET_IS_SEARCHED', false)
      const data = await searchAlgolia(query.trim())
      commit('SET_SEARCH_RESULTS', data)
    } catch (error) {
      throw new Error("error algolia api request")
    } finally {
      commit('SET_IS_SEARCHED', true)
    }
  },
  reset({ commit }) {
    commit('SET_SEARCH_RESULTS')
  }
}

export default actions
