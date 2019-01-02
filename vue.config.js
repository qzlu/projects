const projectConfig = require('./projectConfig')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/Public/zhongtou/'
    : '/',
    devServer: {
        host:'www-dev-local.simuwang.com',
        port:8080,
        proxy: 'http://www-dev-local.simuwang.com/'
    },
    outputDir: projectConfig.outputDir?projectConfig.outputDir:'dist',
    indexPath: projectConfig.indexPath?projectConfig.indexPath:'index.html',
    configureWebpack: {
        entry: {
            app:projectConfig.template + 'main.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: projectConfig.template + 'index.html', 
            })
        ]
    }
}