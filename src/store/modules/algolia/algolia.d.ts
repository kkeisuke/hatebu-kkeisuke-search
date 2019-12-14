export interface AlgoliaState {
  searchResults: SearchResult[]
}

export interface AlgoliaGetter {
  searchResults: SearchResult[]
  parseRawData: (freeword: string, searchResult: SearchResult) => string
}

export interface RootAlgoliaGetter {
  'algolia/searchResults': AlgoliaGetter['searchResults']
  'algolia/parseRawData': AlgoliaGetter['parseRawData']
}

export interface AlgoliaMutation {
  SET_SEARCH_RESULTS: SearchResult[]
}

export interface AlgoliaAction {
  search: string
  reset: undefined
}

export interface RootAlgoliaAction {
  'algolia/search': AlgoliaAction['search']
  'algolia/reset': AlgoliaAction['search']
}

export type SearchResult = {
  content: string
  objectID: string
  path: string
}
