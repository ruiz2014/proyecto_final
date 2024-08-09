const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products)
    res.render("product/list", { layout: "layouts/main", products });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).send("Hubo un error al obtener los personajes");
  }
};

const createProduct = async (req, res) => {
  const { name, price, stop, categoria, marca } = req.body;
  const imagenPath = req.file ? req.file.filename : ''; // Ruta de la imagen guardada en el servidor

  try {
    const newProduct = new Product({
      name,
      price: parseFloat(price),
      stop: parseInt(stop), 
      categoria,
      marca,
      image: imagenPath,
    });
    await newProduct.save();
    res.redirect("/productos");
  } catch (error) {
    console.error("Error al crear productos:", error);
    res.status(500).send("Hubo un error al crear el productos");
  }
};

const showProduct = async (req, res)=> {
  try {
    const product = await Product.findById(req.params.id)
    if(!product){
      return res.status(404).send("no encontrado")
    }
    res.render('product/show', {layout: "layouts/main", product})
  } catch (error) {
    console.log("error", error)
  }
}

const editProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if(!product){
      return res.status(404).send("no encontrado")
    }
    res.render('product/edit', {layout: "layouts/main", product})
  } catch (error) {
    console.log("error", error)
  }
}

const updateProduct = async (req, res) => {
  const { name, price, stop, categoria, marca } = req.body;
  const imagenPath = req.file ? req.file.filename : ''; // Ruta de la imagen guardada en el servidor

  await Product.findByIdAndUpdate(req.params.id, {
    name,
      price: parseFloat(price),
      stop: parseInt(stop), 
      categoria,
      marca,
      image: imagenPath,
  })
  res.redirect("/productos")
}

const deleteProduct = async (req, res) =>{
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect("/productos")
  } catch (error) {
    res.status(500).send("hubo error")
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
  showProduct
};