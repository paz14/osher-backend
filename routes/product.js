const express = require('express')
const router = express.Router()
const Utils = require('../utils')
const Product = require('../models/Product')
const { mongo, Mongoose } = require('mongoose')
const User = require('../models/User')

// GET- get all products ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {

  User.findById(req.user._id)
    .then(user => {
      Product.find({accessLevel: user.accessLevel})
        .then(products => {
            if(products == null){
            return res.status(404).json({
              message: "No product found"
            })
          }
          res.json(products)
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({
            message: "Problem getting product"
          })
        })
    .catch(err => {
      console.log(err)
      res.status(500).json({ 
        message: "Couldn't get user",
        error: err
      })
    })  
  })
})

// export
module.exports = router
