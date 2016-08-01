/* eslint-disable */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin     = require('html-webpack-plugin');


var rootPath = path.join(__dirname, './');
var env = process.env.NODE_ENV || 'development';


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  stats: {
    colors: true
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:4001',
      'webpack/hot/only-dev-server',
      './webapp/src/index.js'
    ]
  },
  output: {
    publicPath: '/bundle',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [path.join(rootPath, 'webapp', 'src')],
        exclude: /node_modules/,
        loader: 'babel',
        query: env === 'development' ?
          {
            'cacheDirectory': true,
            'plugins': [
              ['react-transform', {
                'transforms': [{
                  'transform': 'react-transform-hmr',
                  'imports': ['react'],
                  'locals': ['module']
                }, {
                  'transform': 'react-transform-catch-errors',
                  'imports': ['react', 'redbox-react']
                }]
              }]
            ]
          } :
          undefined
      },
      { test: /.*\.css$/, loader: 'style!css?modules!postcss' },
      { test: /\.styl$/, loader: "style!css?modules!stylus!postcss" },
      { test: /\.png/, loader: "file-loader?mimetype=image/png" },
      { test: /\.jpg/, loader: "file" },
      { test: /\.gif/, loader: "file" },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  resolve: {
    root: rootPath,
    extensions: ['', '.js', '.jsx', '.json', '.css', '.styl']
  },
  plugins: [
    // Prevent showing lint errors
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: "./webapp/assets/index.template.html"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify(env)
      }
    }),
  ]
};


/* eslint-enable */
