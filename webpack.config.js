/* eslint-disable */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var autoprefixer = require('autoprefixer');

var rootPath = path.join(__dirname, './');
var env = process.env.NODE_ENV || 'development';


module.exports = {
  devtool: 'eval',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'normal'
  },
  stats: {
    colors: true
  },
  entry: [
    'webpack-dev-server/client?http://localhost:4001',
    'webpack/hot/only-dev-server',
    './webapp/src/index.js'
  ],
  output: {
    filename: '[name].js',
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
      // Treat node modules' css as global
      {
        test: /.*\.css$/,
        include: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      // The rest is local scoped css
      {
        test: /.*\.css$/,
        include: [
          path.join(rootPath, 'webapp', 'src')
        ],
        loader: 'css?modules!postcss'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  resolve: {
    root: rootPath,
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    // Prevent showing lint errors
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin(),
    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify(env)
      }
    }),
  ]
};


/* eslint-enable */
