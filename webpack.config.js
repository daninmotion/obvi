const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const srcDir = resolve(__dirname, 'src')

module.exports = {
	entry: `${srcDir}/index.js`,
	output: {
		filename: 'bundle.js'
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
				loader: 'style-loader!css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local]',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${srcDir}/index.html`
		})
	]
}