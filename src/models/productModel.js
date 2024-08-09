const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stop: { type: Number, required: true },
  categoria: { type: String, required: true },
  marca: { type: String, required: true },
  image: { type: String, default: '' } // Ruta de la imagen
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;