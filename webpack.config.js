const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/js/root.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    // devServer:{
    //     publicPath:'/dist/'
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",//babel-loader将其他文件解析为js文件
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"] //babel-loader需要的预设
                }
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }
                ],
            },

        ]
    }

}