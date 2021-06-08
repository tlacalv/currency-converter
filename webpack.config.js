const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

var path = require("path");
let proba = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: "../",
  },
};
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "build.js",
    publicPath: process.env.NODE_ENV !== "production" ? "/" : "./",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production" ? "style-loader" : proba,
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  devtool: "#eval-source-map",
  plugins: [
    new VueLoaderPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
};
if (process.env.NODE_ENV === "production") {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new MiniCssExtractPlugin({
      filename: "/assets/[name].css",
    }),
  ]);
}
