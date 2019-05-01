/* eslint-disable */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './public/index.js',
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    port: 3000,
    //open: 'Firefox',
    contentBase: './',
    watchContentBase: true,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/, use: ['style-loader', 'css-loader', 'resolve-url-loader', 'postcss-loader', 'sass-loader']
      },
      // {
      //   test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     },
      //   ],
      // },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url-loader?limit=100000'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/main.html",
      filename: "./main.html"
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[nameTime].css",
    //   chunkFilename: "[id].css"
    // }),
    new ExtractTextPlugin("styles.css"),
  ],
};

