'use strict'

const conn = require('../config/db');

module.exports = {
  addCategory: (data) => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO category SET?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  },
  listCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM category", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  },
  detailCategory: (id_category) => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM category WHERE id_category=?", id_category, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  },
  updateCategory: (id_category, data) => {
    return new Promise((resolve, reject) => {
      conn.query("UPDATE category SET? WHERE id_category=?", [id_category,data], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  },
  deleteCategory: (id_category) => {
    return new Promise((resolve,reject) => {
      conn.query("DELETE FROM category WHERE id_category=?", id_category, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      })
    })
  }
}