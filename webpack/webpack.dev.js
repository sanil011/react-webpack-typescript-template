//  Contain configuration specific to dev
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const { plugins } = require('./webpack.common')
module.exports = {
    mode: "development",
    devServer: {
        hot: true,
        open:true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Sanil')
        }),
        new ReactRefreshWebpackPlugin(),
    ]
}

