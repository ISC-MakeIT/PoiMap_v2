const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build/"),
    publicPath: "/js/",
  },
  devServer: {
    inline: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, 'public'),
    open: true,
    openPage: "index.html",
    port : 3000,
  }
};
