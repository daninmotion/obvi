const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = resolve(__dirname, 'src')

module.exports = {
	entry: `${srcDir}/index.js`,
	output: {
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true
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
	plugins: [
		new HtmlWebpackPlugin({
			template: `${srcDir}/index.html`
		}),
		new ExtractTextPlugin({
			filename: 'styles.css'
		})
	]
}