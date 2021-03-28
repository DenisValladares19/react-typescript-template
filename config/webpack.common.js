const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', ".json"],
        alias: {
            "@layout": path.resolve(__dirname, '../src/layout/'),
            "@components": path.resolve(__dirname, '../src/components/'),
            "@helpers": path.resolve(__dirname, '../src/helpers/'),
            "@hooks": path.resolve(__dirname, '../src/hooks/'),
            "@pages": path.resolve(__dirname, '../src/pages/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test: /\.(css|scss|sass)$/,
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        host: 'localhost',
        compress: true,
        hot: true,
        port: 3000,
        publicPath: '/',
        open: "brave"
    },
    devtool: 'source-map',
    output: {
        filename: '[name]-[contenthash].js',
        publicPath: '../',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html')
        })
    ],
}