const express = require('express');
const categoryController = require('../controller/category');
const Router = express.Router();

Router
.post('/', categoryController.addCategory)
.get('/', categoryController.listCategory)
.get('/:id_category', categoryController.detailCategory)
.delete('/:id_category', categoryController.deleteCategory)

module.exports = Router;