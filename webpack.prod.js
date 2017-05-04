const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: {
		app:`./index.js`,
		vendor: ['react', 'react-dom', 'react-router']
	},
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash:6].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]", camelCase'
				})
			}
		]
	},
	devtool: 'source-map',
	performance: {
		hints: 'error'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: '200.html',
			template: `./index.html`
		}),
		new ExtractTextPlugin({
			filename: 'styles.[chunkhash:6].css'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}