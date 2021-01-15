---
name: 'store'
questions:
  name: 'Please enter directory name.'
root: './src/store/modules'
output: '/*'
ignore: []
---

# `{{ inputs.name }}/index.ts`

```javascript
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import { {{ inputs.name | pascal }}State } from './{{ inputs.name }}'
import { getStateDefault } from './defaults'

const state: {{ inputs.name | pascal }}State = {
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

# `{{ inputs.name }}/actions.ts`

```javascript
import { Actions } from 'vuex'
import { api } from '@/plugins/api'
import { {{ inputs.name | pascal }}State, {{ inputs.name | pascal }}Action, {{ inputs.name | pascal }}Getter, {{ inputs.name | pascal }}Mutation } from './{{ inputs.name }}'

const actions: Actions<{{ inputs.name | pascal }}State, {{ inputs.name | pascal }}Action, {{ inputs.name | pascal }}Getter, {{ inputs.name | pascal }}Mutation> = {
}

export default actions

```

# `{{ inputs.name }}/mutations.ts`

```javascript
import { Mutations } from 'vuex'
import { {{ inputs.name | pascal }}State, {{ inputs.name | pascal }}Mutation } from './{{ inputs.name }}'
import { getStateDefault } from './defaults'

const mutations: Mutations<{{ inputs.name | pascal }}State, {{ inputs.name | pascal }}Mutation> = {
}

export default mutations

```

# `{{ inputs.name }}/getters.ts`

```javascript
import { Getters } from 'vuex'
import { {{ inputs.name | pascal }}State, {{ inputs.name | pascal }}Getter } from './{{ inputs.name }}'

const getters: Getters<{{ inputs.name | pascal }}State, {{ inputs.name | pascal }}Getter> = {
}

export default getters

```

# `{{ inputs.name }}/defaults.ts`

```javascript
import { {{ inputs.name | pascal }}State } from './{{ inputs.name }}'

export function getStateDefault(): {{ inputs.name | pascal }}State {
  return {
  }
}

```

# `{{ inputs.name }}/{{ inputs.name }}.d.ts`

```javascript
export interface {{ inputs.name | pascal }}State {
}

export interface {{ inputs.name | pascal }}Getter {
}

export interface Root{{ inputs.name | pascal }}Getter {
}

export interface {{ inputs.name | pascal }}Mutation {
}

export interface {{ inputs.name | pascal }}Action {
}

export interface Root{{ inputs.name | pascal }}Action {
}

```
