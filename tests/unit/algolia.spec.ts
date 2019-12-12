import store from '@/store'
import { hitsPerPage } from '@/plugins/api'

describe('store algolia', () => {
  const freeword = 'vue'

  beforeAll(() => {
    return store.dispatch('algolia/search', freeword)
  })

  it('search', () => {
    const result = store.getters['algolia/searchResults']
    expect(result.length).toEqual(hitsPerPage)
    expect(result[0].objectID).toBeTruthy()
    expect(result[0].path).toBeTruthy()
    expect(result[0].content).toBeTruthy()
  })

  it('parse raw data', () => {
    const result = store.getters['algolia/searchResults']
    const content = store.getters['algolia/parseRawData'](freeword, result[0])
    const empty = store.getters['algolia/parseRawData'](' ', result[0])
    expect(content).toMatch(/^#### /)
    expect(empty).toEqual('')
  })

  it('search empty freeword', async () => {
    await store.dispatch('algolia/search', ' ')
    const result = store.getters['algolia/searchResults']
    expect(result.length).toEqual(0)
  })
})
