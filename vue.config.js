const { defineConfig } = require('@vue/cli-service')

const config = defineConfig({
  productionSourceMap: false,
  // https://cli.vuejs.org/guide/css.html#css-modules
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true // https://github.com/ant-design/ant-motion/issues/44#issuecomment-625034268
        }
      }
    }
  }
})

module.exports = config
