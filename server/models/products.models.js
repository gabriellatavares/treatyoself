const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type: String, required: true, unique: true},
  image: {type: String},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  stock: {type: Number, required: true},
})

module.exports = mongoose.model('products', ProductSchema);