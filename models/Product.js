const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')

// schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String    
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true    
  },
  volume: {
    type: String,
    required: true
  },
  accessLevel: {
    type: Number,
    required: true
  }
  
}, { timestamps: true })


// model
const productModel = mongoose.model('Product', productSchema)

// export
module.exports = productModel

