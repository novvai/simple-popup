var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './source/main.js',
    output: {
        library: 'SimplePopup',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/popup-js.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                options:
                {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/popup-styles.bundle.css"
        })
    ],
};