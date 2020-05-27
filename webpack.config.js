const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      assets: path.join(__dirname, 'assets'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        loader: 'file-loader?name=assets/img/[name].[ext]',
        test: /\.(png|jpg|gif|ico)$/,
      },
      {
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
        test: /\.ttf$/,
      }
    ]
  },
  mode,
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/assets/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ],
  devtool: prod ? false: 'source-map'
};
