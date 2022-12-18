const express = require('express');
const productController = require('../controller/product');
const Router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
  },
  filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + '-' + file.originalname)
  }
})


const upload = multer({
  storage: storage,
  fileFilter: function (req, file, next) {
      if(!file){
          next()
      }
      const image = file.mimetype.startsWith('image/');
      if(image){
          next(null,true)
      }else{
          next({message: "Only image Allowed!"})
      }
  },
});

const uploadSingle = upload.single('image');

Router
.post('/', (req, res, next) => {
  uploadSingle(req, res, (err) => {
    if (err) {
      res.json(err);
    } else {
      next();
    }
  })
}, productController.addProduct)
.get('/', productController.listProduct)
.get('/:id_product', productController.detailProduct)
.delete('/:id_product', productController.deleteProduct)

module.exports = Router;