const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // context: path.resolve(__dirname, "../"),
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    libraryTarget: "umd",
    library: "smart-modal"
  },
  //   resolove: {},
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  // devtool: '#source-map',
  plugins: [
    //   define varables
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: false,
        beautify: true
        // compress: {
        //   warnings: false
        // }
      }
      //   sourceMap: config.build.productionSourceMap,
      //   parallel: true
    })
  ]
};