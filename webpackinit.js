const express = require('express');
const path = require('path');


module.exports = (app) => {

    if(process.env.NODE_ENV !== 'production')
    {
        const webpackMiddleware = require('webpack-dev-middleware');
        const webpack = require('webpack');
        const webpackConfig = require('./webpack.config');
        const compiler = webpack(webpackConfig)
    
        app.use(webpackMiddleware(compiler));
    }
    else
    {
        app.use(express.static('public/dist'));
        app.get('*', (req,res) => {
            res.sendFile(path.join(__dirname,'index.html'));
        });
        process.on('uncaughtException', function (err) {
            console.error(err.stack); // either logs on console or send to other server via api call.
            process.exit(1)
        });
    }
}