const path= require("path")

module.exports = {
    entry: "./src/index.js",
    mode: "development", // default is production
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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