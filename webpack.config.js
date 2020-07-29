const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'buuild.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'assets/[name].css',
    // }),
  ]
}