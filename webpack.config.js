const path = require("path");

module.exports = {
  entry: "./lib/main.js",
  module: { rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "pragmatic-fp-ts.min.js",
    library: "l",
    libraryTarget: "var",
  },
};
