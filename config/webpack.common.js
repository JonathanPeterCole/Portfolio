const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app/index'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico|woff|woff2)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/static',
        to: '',
        toType: 'dir'
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/template.html'
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/html/template.html'
    })
  ],
  target: 'web'
}
