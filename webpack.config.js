const merge = require('webpack-merge')
const utils = require("./build/utils");


function buildConfig(env) {
  // return require('./build/' + env + '.js')
  const basic = require('./build/' + env + '.js');
  if (env === 'webpack.dev') {
    const resultConfig = merge(basic, {
      module: {
        rules: utils.styleLoaders({
          sourceMap: true,
          usePostCSS: true
        })
      }
    })
    return resultConfig
  }
  return basic;

}
module.exports = buildConfig