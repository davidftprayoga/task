const express = require('express');

const Router = express.Router();

const category = require('./cateogry');
Router.use('/category', category);

const product = require('./product');
Router.use('/product',product);

module.exports = Router;