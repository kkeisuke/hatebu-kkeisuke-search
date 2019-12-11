import { reactive, onMounted, SetupContext } from '@vue/composition-api'
import { HatebuSearchParam } from '@/store/modules/hatebu-search/hatebu-search'
import store from '@/store'
import { LoadingBar, Input } from 'view-design'

export const useHatebuSearch = (refs: SetupContext['refs']) => {
  const param: HatebuSearchParam = reactive({
    freeword: ''
  })

  onMounted(() => {
    ;(refs.searchBox as Input)?.focus()
  })

  async function search() {
    store.dispatch('hatebuSearch/setFreeword', param.freeword)
    try {
      LoadingBar.start()
      await store.dispatch('algolia/search', store.getters['hatebuSearch/freeword'])
    } catch (error) {
      LoadingBar.error()
    }
    LoadingBar.finish()
  }

  return {
    param,
    search
  }
}
