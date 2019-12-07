import { Getters } from 'vuex'
import { AlgoliaState, AlgoliaGetter, SearchResult } from './algolia'

const getters: Getters<AlgoliaState, AlgoliaGetter> = {
  searchResults({ searchResults }) {
    return searchResults
  },
  parseRawData() {
    return (freeword: string, searchResult: SearchResult) => {
      // 複数のフリーワード
      const freewords = freeword.replace('　', ' ').split(' ')
      // マークダウンを段落ごとに処理
      const contents = searchResult.content
        .split('\n\n')
        .filter(paragraph => {
          // 段落に1つでもフリーワードが含まれているか？
          return freewords.some(target => {
            return paragraph.toLowerCase().includes(target.toLowerCase())
          })
        })
        .map(paragraph => {
          // 段落を行ごとに分割して、含まれているフリーワードを code タグに置換
          const paragraphs = paragraph.split('\n').filter(row => Boolean(row))
          const regExp = new RegExp(`${freewords.join('|')}`, 'ig')
          const replaced = '`$&`'
          // タイトル
          paragraphs[0] = paragraphs[0].replace(regExp, replaced)
          // コメント
          if (paragraphs[3]) {
            paragraphs[3] = paragraphs[3].replace(regExp, replaced)
          }
          // 再び段落に戻す
          return paragraphs.join('\n')
        })
      // 複数の段落をまとめて返す
      return contents.join('\n\n')
    }
  }
}

export default getters
