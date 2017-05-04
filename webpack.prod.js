const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: {
		app:`./index.js`,
		vendor: ['react', 'react-dom', 'react-router']
	},
	output: {
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
					loader: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
				})
			}
		]
	},
	devtool: 'source-map',
	performance: {
		hints: 'error'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `./index.html`
		}),
		new ExtractTextPlugin({
			filename: 'styles.css'
		})
	]
}