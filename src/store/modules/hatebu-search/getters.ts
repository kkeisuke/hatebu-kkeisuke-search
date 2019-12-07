import { Getters } from 'vuex'
import { HatebuSearchState, HatebuSearchGetter } from './hatebu-search'

const getters: Getters<HatebuSearchState, HatebuSearchGetter> = {
  freeword({ param: { freeword } }) {
    return freeword
  }
}

export default getters
