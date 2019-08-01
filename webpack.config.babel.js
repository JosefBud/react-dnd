import webpack from 'webpack';
import path from 'path';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

export default {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [{
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        /* use: [{
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ] */
        use: [
          MiniCSSExtractPlugin.loader,
          /* {
            loader: 'style-loader'
          }, */
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [APP_DIR]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    })
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};

//module.exports = config;