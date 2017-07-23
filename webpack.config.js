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
            {test:/\.(png|jpg|gif)$/,use:'url-loader'}
        ]
    },
    plugins:[
        new HtmlPlugin({
            title:'团购App',
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',
    devServer:{
        proxy:{
            '/api':'http://localhost:3000' //访问路径是以api开头的跳到以3000端口的去访问,实现跨域
        }
    }
};
