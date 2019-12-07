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
}

export interface RootAlgoliaAction {
  'algolia/search': AlgoliaAction['search']
}

export type SearchResult = {
  content: string
  objectID: string
  path: string
}
