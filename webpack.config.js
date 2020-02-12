const path = require('path');
const UglifyJSPlugin = require( "uglifyjs-webpack-plugin")

module.exports = {
  entry: {
         app: './src/index.js',
         mio: './src/mio.js'
  },
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 9000
        },
    module: {
         loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }]
        }
  };
  