var webpack = require("webpack");
__dirname = __dirname.charAt(0).toUpperCase() + __dirname.slice(1);
console.log(__dirname);

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: __dirname + '/dist/assets/',
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			}
		]
	}
}
