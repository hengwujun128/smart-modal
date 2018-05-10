const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");

const utils = require("./utils");
module.exports = merge(base, {
  output: {
    filename: "index.js"
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true,
      usePostCSS: true
    })
  }
});
