var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		home: './src/script/home/home.js',
		cart: './src/script/cart/cart.js',
		details: './src/script/details/details.js',
		register: './src/script/register/register.js',
		login: './src/script/login/login.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	},
	devServer: {

		proxy: {
			'/api': {
				target: 'http://localhost'
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['home']
		}),
		new HtmlWebpackPlugin({
			template: './src/html/cart.html',
			filename: 'html/cart.html',
			chunks: ['cart']
		}),
		new HtmlWebpackPlugin({
			template: './src/html/register.html',
			filename: 'html/register.html',
			chunks: ['register']
		}),
		new HtmlWebpackPlugin({
			template: './src/html/login.html',
			filename: 'html/login.html',
			chunks: ['login']
		}),
		new HtmlWebpackPlugin({
			template: './src/html/details.html',
			filename: 'html/details.html',
			chunks: ['details']
		}),
		new CleanWebpackPlugin(['dist']),

		new CopyWebpackPlugin([{
			from: __dirname + '/src/resource/icons',
			to: __dirname + '/dist/resource/icons'
		}])	
	],
	mode: 'development',
	module: {
		rules: [{
			test: /\.scss$/,
			include: path.resolve(__dirname, 'src'),
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}, {
			test: /\.css/,
			use: {
				loader: 'css-loader'
			}
		}, {

			test: /\.html$/,
			use: {
				loader: 'html-loader',
				options: {
					attrs: [':src', 'link:href']
				}
			}
		}, 
		{
			test: /\.(eot)|(svg)|(ttf)|(woff)/,
			use: [
				'url-loader'
			]
		},
		{
			test: /\.(jpg)|(gif)|(png)|(ico)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: 'resource/imgs/[name].[ext]',
					publicPath: '/'
				}
			}
		}]
	}
}
