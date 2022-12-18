'use strict'

const categoryModel = require("../model/category");
const miscHelper = require("../helper/helper");
const date = require('date-and-time');


module.exports = {
  addCategory : (req, res) => {
    const category_name = req.body.category_name;
    const now = new Date();
    const createdAt = date.format(now, "YYYY-MM-DD HH:mm:ss");
    const data = {
      category_name,
      createdAt
    }
    categoryModel.addCategory(data)
    .then((result) => {
      res.json({status_code:200, message: "success added category"});
    })
    .catch(err => console.log(err));
  },
  listCategory: (req,res) => {
    categoryModel.listCategory()
    .then((result)=> {
      miscHelper.response(res, result, 200);
    })
    .catch(err => console.log(err));
  },
  detailCategory: (req, res) => {
    const id_category = req.params.id_category

    categoryModel.detailCategory(id_category)
    .then((result) => {
      res.json(result);
    })
    .catch(err => console.log(err));
  },
  deleteCategory: (req, res) => {
    const id_category = req.params.id_category
    
    categoryModel.deleteCategory(id_category)
    .then((result) => {
      res.json({status_code:200, message: `success delete category id ${id_category}`});
    })
    .catch(err => console.log(err));
  }
}