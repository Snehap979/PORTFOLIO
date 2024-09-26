
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply babel-loader for .js files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, // Apply style-loader and css-loader for .css files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/, // Apply file-loader for image files
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file
      filename: 'index.html' // Output HTML file name
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
    compress: true,
    port: 3000
  }
};

