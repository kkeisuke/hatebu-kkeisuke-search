import algoliasearch from 'algoliasearch'
import { SearchResult } from '@/store/modules/algolia/algolia'

const client = algoliasearch(process.env.VUE_APP_ALGOLIA_APPLICATION, process.env.VUE_APP_ALGOLIA_API_KEY)
const index = client.initIndex(process.env.VUE_APP_ALGOLIA_INDEX)
export const hitsPerPage = 365

export const searchAlgolia = async (query: string) => {
  const { hits } = await index.search(query, { hitsPerPage })

  return hits as SearchResult[]
}
