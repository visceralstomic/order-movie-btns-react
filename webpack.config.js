const path = require('path');

const config = {
	entry: ['@babel/polyfill' ,'./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		compress: true,
		port: 3000,
		public: "16302049ffaf.ngrok.io"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env','@babel/preset-react'],
				}
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'source-map'
}

module.exports = config;


