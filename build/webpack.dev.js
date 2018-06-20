var path = require('path')
var webpack = require('webpack')


// webpack 环境上下文是当前工作目录|，从当前工作目录去找entry；输出目录要是绝对路径
module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, './dev'),
    publicPath: '/dev/',
    filename: 'build.js' //output to memory 
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // adding this test,we can  deal with font,especial when use element-ui
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          // name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
          name: "static/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  devServer: {
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}