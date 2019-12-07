export interface HatebuSearchState {
  param: HatebuSearchParam
}

export interface HatebuSearchGetter {
  freeword: string
}

export interface RootHatebuSearchGetter {
  'hatebuSearch/freeword': HatebuSearchGetter['freeword']
}

export interface HatebuSearchMutation {
  SET_FREEWORD: string
}

export interface HatebuSearchAction {
  setFreeword: string
}

export interface RootHatebuSearchAction {
  'hatebuSearch/setFreeword': HatebuSearchAction['setFreeword']
}

export type HatebuSearchParam = {
  freeword: string
}
