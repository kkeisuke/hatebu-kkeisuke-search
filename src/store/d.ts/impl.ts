// https://github.com/takefumi-yoshii/ts-nuxtjs-express/tree/master/types/vuex

import 'vuex'
import { AlgoliaState, RootAlgoliaGetter, RootAlgoliaAction } from '../modules/algolia/algolia'
import { HatebuSearchState, RootHatebuSearchGetter, RootHatebuSearchAction } from '../modules/hatebu-search/hatebu-search'

declare module 'vuex' {
  type RootState = {
    hatebuSearch: HatebuSearchState
    algolia: AlgoliaState
  }
  type RootGetters = RootAlgoliaGetter & RootHatebuSearchGetter
  type RootMutations = unknown // 使用しない
  type RootActions = RootAlgoliaAction & RootHatebuSearchAction
}
