const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => ({
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
  entry: { main: './index.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: argv.mode === 'production' ? './js/[name].[chunkhash].js' : './js/[name].js',
    chunkFilename: argv.mode === 'production' ? './js/[name].[chunkhash].js' : './js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: argv.mode === 'production' ? false : 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 3000,
    overlay: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
					'css-loader',
					'postcss-loader',
        ],
      },
      {
        test: /\.(webp|png|jpg|svg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
		new WebpackMd5Hash(),
		new CleanWebpackPlugin(),
  ],
});
