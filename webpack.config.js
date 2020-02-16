const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  // target: 'node',
  output: {
    filename: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-react-constant-elements'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    modules: ['./src', 'node_modules'],
    // modules: ['node_modules'],
    // modules: [path.resolve(__dirname, '/src'), '../node_modules/'],
    extensions: ['.js', '.jsx', '.svg', '.ts', 'tsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4172,
    watchContentBase: true,
    progress: true,

  }
}
