const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require(`mini-css-extract-plugin`);



module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    mode: `production`,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: "html-loader"}
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })

    ,
    new miniCssExtractPlugin({
        filename: "[name].css"
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000
    },
}