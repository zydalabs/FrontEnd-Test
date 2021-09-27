const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    mode: "development", // default is production
    output: {
        filename: "main.[contenthash].js", // contentHash for cash busting
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", // 3 inject to dom
                      "css-loader",  // 2 convert css into common js
                      "sass-loader"], // 1 convert to css
            },
        ],
    }
}