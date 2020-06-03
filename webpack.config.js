const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename:  "index_bundle.js"
  },
  module: {
      rules:  [
          {
            test: /\.(js|jsx)$/,
            exclude: /node modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/react',
                {'plugins': ['@babel/plugin-proposal-class-properties']}
              ]
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        /*   {
            test: /\.(sass|scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          } */
      ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
/*   devServer: {
    contentBase: path.join(__dirname, "./src/public"),
    port: 8080,
    publicPath: "http://localhost:8080/dist/",
    hotOnly: true
  }, */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "dist/index.html"),
      filename: "index.html"
    })
  ]
};

