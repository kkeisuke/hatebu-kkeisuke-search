import { SearchResult } from './algolia'

export function getSearchResultDefault(): SearchResult {
  return {
    objectID: '',
    content: '',
    path: ''
  }
}
