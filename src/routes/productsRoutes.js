const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productsController = require("../controllers/productsController");

// // Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/")); // Ruta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Agrega un timestamp al nombre del archivo
  }
});
const upload = multer({ storage: storage });

// Ruta para mostrar todos los personajes
router.get("/", productsController.getAllProducts);
// Ruta para mostrar el formulario
router.get("/crear", (req, res) => {
  res.render("product/create", { layout: "layouts/main" });
});
// Ruta para manejar la creación de un nuevo personaje
router.post("/crear", upload.single("imagen"), productsController.createProduct);

router.get("/show/:id", productsController.showProduct)

router.get("/edit/:id", productsController.editProduct)

router.post("/edit/:id", upload.single("imagen"), productsController.updateProduct);

router.get("/delete/:id", productsController.deleteProduct);


module.exports = router;