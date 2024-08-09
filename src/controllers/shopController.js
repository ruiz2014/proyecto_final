const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products)
    // res.render("product/show", { layout: "layouts/main", products });
    res.status(200).json(products)
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).send("Hubo un error al obtener los personajes");
  }
};

module.exports = {
  getAllProducts,
  // createProduct,
  // editProduct,
  // updateProduct,
  // deleteProduct
};