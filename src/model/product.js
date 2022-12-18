'use strict'

const conn = require('../config/db');

module.exports = {
  addProduct: (data) => {
    return new Promise((resolve, reject) => [
      conn.query("INSERT INTO product SET?", data, (err, result) => {
        if (!err) {
          resolve(result);
        }
        else {
          reject(new Error(err));
        }
      })
    ])
  },
  listProduct: () => {
    return new Promise((resolve, rejecet) => {
      conn.query("SELECT * FROM product", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          rejecet(new Error(err));
        }
      })
    })
  },
  detailProduct: (id_product) => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM product WHERE id_product=?", id_product, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  }, 
  updateProduct: (id_product, data) => {
    return new Promise((resolve, reject) => {
      conn.query("UPDATE prodcut SET? WHERE id=?", [id_product, data], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  },
  deleteProduct: (id_product) => {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM product WHERE id_product=?", id_product, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  }
}