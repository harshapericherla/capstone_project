const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        bundle: './client/index.js'
    },
    devServer: {
        contentBase: './public/dist', // both src and output dirs
        inline: true,
        hot: true
    },
    output: {
        path: path.join(__dirname,'public/dist'),
        filename:'[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath:'./'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // only enable hot in development
                        hmr: process.env.NODE_ENV === 'development',
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                use:[
                    'file-loader',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
        }),
        new HtmlWebpackPlugin({
            template:'webpack-template.html'
        })
    ],
    optimization: {
        splitChunks: {
         cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
           chunks: 'initial',
           name: 'vendor',
           enforce: true,
           chunks: 'all'
           }
         }
       },
       runtimeChunk: {
          name: "manifest"
       } 
    }
}

module.exports = config;