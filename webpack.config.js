let path = require('path');
let HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        ]
    },
    plugins:[
        new HtmlPlugin({
            title:'团购App',
            template:'./app/index.html'
        })
    ],
    devtool:'source-map'
};
