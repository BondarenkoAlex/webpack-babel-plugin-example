const path = require('path');
// const addArrowFunc = require('./babel-plugins/addArrowFunc');
// const empty = require('./babel-plugins/empty');

module.exports = {
	mode: 'development',
	entry: require.resolve('./lib/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	resolve: {
		modules: [path.resolve(__dirname), './']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
		],
	},
};
