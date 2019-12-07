import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import { HatebuSearchState } from './hatebu-search'
import { getParamDefault } from './defaults'

const state: HatebuSearchState = {
  param: getParamDefault()
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
