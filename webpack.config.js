const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // add postcss-loader
        loader: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { importLoaders: 1 } }, {
          loader: "postcss-loader", options: {
            options: {}
          }
        }]
      },
      {
        test: /\.(woff|woff2|svg|png|jpg)$/,
        loader: "file-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
