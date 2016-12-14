var webpack = require("webpack");

module.exports = {
	entry: {
		"eg.<%= componentName %>": "./src/index.js",
		"eg.<%= componentName %>.min": "./src/index.js"
	},
	output: {
		path: "./dist",
		filename: "[name].js",
		library: "eg",
		libraryTarget: "umd"
	},
	devServer: {
		publicPath: "/dist/"
	},
	devtool: "source-map",
	module: {
		loaders: [
		  {
			test: /\.js$/,
			loader: "babel-loader",
			query: {
			  presets: ["es2015"]
			}
		  }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		  include: /\.min\.js$/,
		  minimize: true
		})
	]
};
