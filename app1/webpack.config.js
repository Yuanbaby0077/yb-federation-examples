const path = require('path')
const VueLoaderPlugin = require('vue-loader-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.ts',
  devtool: "cheap-module-source-map",
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".vue"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader", 
        options: {
          // transpileOnly: true,
          happyPackMode: true
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `loaders` 覆盖默认 loaders。
          // 以下配置会导致所有无 `lang` 特性的 `<script>` 标签加载 `coffee-loader`
          // loaders: {
          //   js: 'coffee-loader'
          // },

          // `preLoaders` 会在默认 loaders 之前加载。
          // 你可以用来预处理语言块——一个例子是用来处理构建时的 i18n
          // preLoaders: {
          //   js: '/path/to/custom/loader'
          // },

          // `postLoaders` 会在默认 loaders 之后加载。
          //
          // - 对于 `html`, 默认 loader 返回会编译为 JavaScript 渲染函数
          //
          // - 对于 `css`, 由`vue-style-loader` 返回的结果通常不太有用。使用 PostCSS 插件将会是更好的选择。
          // postLoaders: {
          //   html: 'babel-loader'
          // }

          // `excludedPreLoaders` 应是正则表达式
          // excludedPreLoaders: /(eslint-loader)/
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'app1 demo',
        filename: 'index.html',
        template: 'index.html'
      }
    )
  ]
}