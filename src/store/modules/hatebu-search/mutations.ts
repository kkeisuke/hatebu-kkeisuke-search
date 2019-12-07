import { Mutations } from 'vuex'
import { HatebuSearchState, HatebuSearchMutation } from './hatebu-search'

const mutations: Mutations<HatebuSearchState, HatebuSearchMutation> = {
  SET_FREEWORD(state, freeword) {
    state.param.freeword = freeword || ''
  }
}

export default mutations
