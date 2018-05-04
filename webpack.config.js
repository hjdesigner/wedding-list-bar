const path = require('path');
const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
	context: path.resolve(__dirname, './src'),
	devtool: 'source-map',
	devServer: {
    hot: true,
    inline: true,
  },
  entry: {
		filename: './scripts/main.js'
  },
  output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  module: {
		loaders: [
			{
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { module: false }]
          ]
        }
      }
		],
	},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
}
