const config = require('./config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: [
		'./src/style.css',
		'./src/index.js'
	],
	mode: process.env.NODE_ENV,
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader',
				],
			}),
		}, ],
	},
	plugins: [
		new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('src/style.css').replace('css/js', 'css');
            },
            allChunks: true
        }),
		new BrowserSyncPlugin( {
                proxy: config.url,
                files: [
                    '**/*.php'
                ],
                reloadDelay: 0
            }
        )
	],
}