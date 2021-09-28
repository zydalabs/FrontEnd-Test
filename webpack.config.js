const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // for stand alone generated css files
const { EnvironmentPlugin } = require('webpack')

module.exports = {
    entry: "./src/index.js",
    mode: "development", // default is production
    devtool: 'inline-source-map', // to get a reference to the original file that raised an error
    output: {
        filename: "main.[contenthash].js", // contentHash for cash busting
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            inject: true
        }),
        new MiniCssExtractPlugin(),
        new EnvironmentPlugin({
            REACT_APP_COUNTRY_LAYER_API_KEY: "api.countrylayer.com/v2/"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ]
    }
};
