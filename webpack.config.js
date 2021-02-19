const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path')
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: { path: path.join(__dirname, './dist'), filename: 'bundle.js'},
  devServer: {
    open: true,
    compress: true,
    host: '127.0.0.1',
    port: 8080,
    quiet: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader'},
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
    ]
  }
 
}