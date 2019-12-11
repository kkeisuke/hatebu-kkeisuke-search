import Vue from 'vue'
import { Layout, Content, Header, Drawer, Form, FormItem, Input, Button, Card, Icon, List } from 'view-design'
import lang from 'view-design/dist/locale/ja-JP'
import { locale } from 'view-design'

locale(lang)

Vue.component('Layout', Layout)
Vue.component('Content', Content)
Vue.component('Header', Header)
Vue.component('Drawer', Drawer)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('Icon', Icon)
Vue.component('List', List)
Vue.component('ListItem', List.Item)

import '../styles/iview-variables.less'
