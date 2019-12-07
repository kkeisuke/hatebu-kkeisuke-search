import algoliasearch from 'algoliasearch'

const client = algoliasearch(process.env.VUE_APP_ALGOLIA_APPLICATION, process.env.VUE_APP_ALGOLIA_API_KEY)
const index = client.initIndex(process.env.VUE_APP_ALGOLIA_INDEX)
const hitsPerPage = 365

export const search = async (query: string) => {
  const { hits } = await index.search({ query, hitsPerPage })

  return hits
}
