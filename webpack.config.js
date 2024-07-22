
/*
引入webpack，详情见 https://v5.bootcss.com/docs/getting-started/webpack/
*/
const { clear, assert } = require('console')
const path = require('path')
const loader = require('sass-loader')
require('webpack')

module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'image/[name][ext][query]'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8001,
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },

          {
            test: /\.png$/i,
            type: 'asset',
            parser: {
                dataUrlCondition:{
                  maxSize: 10*1024
                }
            }
          }
        ]
    }
}

