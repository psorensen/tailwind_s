const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/style.css',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      disable: process.env.NODE_ENV === 'development',
    })
  ],
}
