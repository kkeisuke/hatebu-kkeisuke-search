import Vue from 'vue'
import { Layout, Content, Header } from 'view-design'
import lang from 'view-design/dist/locale/ja-JP'
import { locale } from 'view-design'

locale(lang)

Vue.component('Layout', Layout)
Vue.component('Content', Content)
Vue.component('Header', Header)

import '../styles/iview-variables.less'
