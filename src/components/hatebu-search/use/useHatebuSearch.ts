import { reactive } from '@vue/composition-api'
import { HatebuSearchParam } from '@/store/modules/hatebu-search/hatebu-search'
import store from '@/store'
import { LoadingBar } from 'view-design'

export const useHatebuSearch = () => {
  const param: HatebuSearchParam = reactive({
    freeword: ''
  })

  async function search() {
    store.dispatch('hatebuSearch/setFreeword', param.freeword)
    store.dispatch('algolia/reset')
    try {
      LoadingBar.start()
      await store.dispatch('algolia/search', store.getters['hatebuSearch/freeword'])
    } catch (error) {
      LoadingBar.error()
    } finally {
      LoadingBar.finish()
    }
  }

  return {
    param,
    search
  }
}
