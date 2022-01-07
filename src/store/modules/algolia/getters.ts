import { Getters } from 'vuex'
import { AlgoliaState, AlgoliaGetter, SearchResult } from './algolia'

const getters: Getters<AlgoliaState, AlgoliaGetter> = {
  searchResults({ searchResults }) {
    return searchResults
  },
  parseRawData() {
    return (freeword: string, searchResult: SearchResult) => {
      if (!freeword.trim()) return ''
      // 複数のフリーワード
      const freewords = freeword.trim().replace('　', ' ').split(' ')

      const regExp = new RegExp(`${freewords.join('|')}`, 'ig')
      const replaced = '`$&`'

      // マークダウンを段落ごとに処理
      const contents = searchResult.content
        .split('\n\n')
        .filter((paragraph) => {
          // 段落に1つでもフリーワードが含まれているか？
          return freewords.some((target) => {
            return paragraph.toLowerCase().includes(target.toLowerCase())
          })
        })
        .map((paragraph) => {
          // 段落を行ごとに分割して、含まれているフリーワードを code タグに置換
          const lines = paragraph.trim().split('\n')
          // タイトル
          lines[0] = lines[0].replace(regExp, replaced).replaceAll('<', '&lt;').replaceAll('>', '&gt;')
          // URL
          try {
            lines[1] = decodeURIComponent(lines[1])
          } catch (error) {
            // そのまま
          }
          // コメント
          if (lines[3]) {
            lines[3] = lines[3].replace(regExp, replaced)
          }
          // 再び段落に戻す
          return lines.join('\n')
        })
      // 複数の段落をまとめて返す
      return contents.join('\n\n')
    }
  },
  markdowns(_, { searchResults, parseRawData }, __, rootGetters) {
    return searchResults
      .map((searchResult) => {
        return {
          searchResult,
          content: parseRawData(rootGetters['hatebuSearch/freeword'], searchResult)
        }
      })
      .sort((pre, next) => {
        // 日付 降順
        if (pre.searchResult.objectID < next.searchResult.objectID) {
          return 1
        } else if (pre.searchResult.objectID > next.searchResult.objectID) {
          return -1
        }
        return 0
      })
      .filter((md) => Boolean(md.content))
  },
  isEmpty({ isSearched }, { searchResults, markdowns }) {
    return isSearched && (!searchResults.length || !markdowns.length)
  }
}

export default getters
