const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('views',resolve('src/views'))
  },
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
