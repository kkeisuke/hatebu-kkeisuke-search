import Vue from 'vue'
import { Button } from 'view-design'
import lang from 'view-design/dist/locale/ja-JP'
import { locale } from 'view-design'

locale(lang)

Vue.component('Button', Button)

import '../styles/iview-variables.less'
