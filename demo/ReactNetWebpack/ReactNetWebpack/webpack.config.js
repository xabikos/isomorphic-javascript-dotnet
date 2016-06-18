var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    server: path.resolve(path.join(__dirname, 'app', 'bootServer.js')),
    client: path.resolve(path.join(__dirname, 'app', 'bootClient.js')),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loaders: ["style", "css", "postcss", "sass"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: "url?limit=10000&minetype=image/png"
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    host: "0.0.0.0",
    port: "3000",
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether"
    })
  ],
  postcss: function () {
    return [autoprefixer];
  }
};
