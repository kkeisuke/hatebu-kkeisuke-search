import { Actions } from 'vuex'
import { HatebuSearchState, HatebuSearchAction, HatebuSearchGetter, HatebuSearchMutation } from './hatebu-search'

const actions: Actions<HatebuSearchState, HatebuSearchAction, HatebuSearchGetter, HatebuSearchMutation> = {
  setFreeword({ commit }, freeword) {
    commit('SET_FREEWORD', freeword)
  }
}

export default actions
