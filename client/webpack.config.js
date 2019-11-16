const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/js/'
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    watchContentBase: true,
    open: true,
    openPage: 'public/index.html',
    port: 3000
  }
};
