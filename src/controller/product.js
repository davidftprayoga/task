'use strict'

const productModel = require('../model/product');
const miscHelper = require('../helper/helper');
const date = require('date-and-time');

module.exports = {
  addProduct: (req, res) => {
    const {id_category, product_name, price} = req.body;
    const now = new Date;
    const createdAt = date.format(now, "YYYY-MM-DD HH:mm:ss");
    const data = {
      id_category,
      product_name,
      price,
      image : process.env.URL_IMG + `uploads/${req.file.filename}`,
      createdAt
    }
    productModel.addProduct(data)
    .then((result) => {
      const dataResponse = {id_product: result.insertId, ... data}
      miscHelper.response(res, dataResponse, 200);
    })
    .catch(err => console.log(err));
  },
  listProduct: (req, res) => {
    productModel.listProduct()
    .then((result) => {
      miscHelper.response(res, result, 200);
    })
    .catch(err => console.log());
  },
  detailProduct: (req, res) => {
    const id_product = req.params.id_product; 

    productModel.detailProduct(id_product)
    .then((result) => {
      miscHelper.response(res, result, 200)
    })
    .catch(err => console.log(err));
  },
  deleteProduct: (req, res) => {
    const id_product = req.params.id_product;

    productModel.deleteProduct(id_product)
    .then((result) => {
      res.json({status:"product deleted successfully"})
    })
    .catch(err => console.log(err));
  }
}