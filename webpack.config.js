const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "main.js"),
  },
  output: {
    filename: "assets/js/[name]-[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      inject: "head"
    }),
    new CopyWebpackPlugin([
      { from: "public/assets", to: "assets" }
    ]),
    new CopyWebpackPlugin ([
        { from: "public/custom-font", to: "custom-font" }
    ]),
    new VueLoaderPlugin()
  ]
}
