---
name: 'store'
description: 'Generate store files'
message: 'Please enter directory name.'
root: './src/store/modules'
output: '/*'
ignore: []
---

# `{{ input }}/index.ts`

```javascript
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import { {{ input | pascal }}State } from './{{ input }}'
import { getStateDefault } from './defaults'

const state: {{ input | pascal }}State = {
  ...getStateDefault()
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

```

# `{{ input }}/actions.ts`

```javascript
import { Actions } from 'vuex'
import { api } from '@/plugins/api'
import { {{ input | pascal }}State, {{ input | pascal }}Action, {{ input | pascal }}Getter, {{ input | pascal }}Mutation } from './{{ input }}'

const actions: Actions<{{ input | pascal }}State, {{ input | pascal }}Action, {{ input | pascal }}Getter, {{ input | pascal }}Mutation> = {
}

export default actions

```

# `{{ input }}/mutations.ts`

```javascript
import { Mutations } from 'vuex'
import { {{ input | pascal }}State, {{ input | pascal }}Mutation } from './{{ input }}'
import { getStateDefault } from './defaults'

const mutations: Mutations<{{ input | pascal }}State, {{ input | pascal }}Mutation> = {
}

export default mutations

```

# `{{ input }}/getters.ts`

```javascript
import { Getters } from 'vuex'
import { {{ input | pascal }}State, {{ input | pascal }}Getter } from './{{ input }}'

const getters: Getters<{{ input | pascal }}State, {{ input | pascal }}Getter> = {
}

export default getters

```

# `{{ input }}/defaults.ts`

```javascript
import { {{ input | pascal }}State } from './{{ input }}'

export function getStateDefault(): {{ input | pascal }}State {
  return {
  }
}

```

# `{{ input }}/{{ input }}.d.ts`

```javascript
export interface {{ input | pascal }}State {
}

export interface {{ input | pascal }}Getter {
}

export interface Root{{ input | pascal }}Getter {
}

export interface {{ input | pascal }}Mutation {
}

export interface {{ input | pascal }}Action {
}

export interface Root{{ input | pascal }}Action {
}

```
