module.exports = {
  productionSourceMap: false,
  // https://cli.vuejs.org/guide/css.html#css-modules
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true // https://github.com/ant-design/ant-motion/issues/44#issuecomment-407498459
      }
    }
  }
}
