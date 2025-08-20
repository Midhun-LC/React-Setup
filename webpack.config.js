import  htmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

const module = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}

export default module;