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
        app.use(express.static('dist'));
        app.get('*', (req,res) => {
            res.sendFile(path.join(__dirname,'dist/index.html'));
        })
    }
}