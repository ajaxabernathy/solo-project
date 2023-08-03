const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
  filename: 'bundle.js',
};

module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    static: {
      // match the output 'publicPath'
      publicPath: '/',
      directory: path.resolve(__dirname)
    },
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/api/**': {
        target: 'http://localhost:8080/',
        router: () => 'http://localhost:3000',
        secure: false,
      },
    },
  },
  entry,
  output,
  devtool: "eval-source-map",
  module: {
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      },
      {
        test: /\.mp3$/i,
        use: 'raw-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template: 'index.html'
    }),
  ],
};  