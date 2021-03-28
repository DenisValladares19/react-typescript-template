const { merge } = require('webpack-merge');
const comon = require('./webpack.common');
const DotEnv = require('dotenv-webpack');
const path = require('path');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new DotEnv({
            path: path.resolve(__dirname, '../.env.development')
        })
    ]
}

module.exports = merge(comon, devConfig);