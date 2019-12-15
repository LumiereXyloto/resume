const path = require('path');
const { WebPlugin } = require('web-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    publicPath: '',
    filename: '[name].js',
  },
  resolve: {
    // 加快搜索速度
    modules: [path.resolve(__dirname, 'node_modules')],
    // es tree-shaking
    mainFields: ['jsnext:main', 'browser', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 提取出css
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        // 提取出css
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        loader: 'base64-inline-loader',
      },
    ]
  },
  entry: {
    main: './src/main.js',
  },
  plugins: [
    new WebPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      template:'src/index.html',　　//为新生成的index.html指定模版
      minify:{ //压缩HTML文件
          removeComments:true,    //移除HTML中的注释
          collapseWhitespace:true    //删除空白符与换行符
      }
    })
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: './dist'
  }
};
