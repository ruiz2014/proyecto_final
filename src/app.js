const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const hbs = require("hbs");
const productsRouter = require('./routes/productsRoutes');
const shopRouter = require('./routes/shopRoutes');
const apiRouter = require('./routes/apiRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

app.use(cors()); // Permite solicitudes desde diferentes orígenes

// Configurar Handlebars como motor de plantillas
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views")); 
hbs.registerPartials(path.join(__dirname, "views", "partials")); 

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "../public")));

app.use("/productos", productsRouter);
app.use("/tienda", shopRouter);
app.use("/api", apiRouter);

app.get('/', (req, res)=>{
    res.render("index", {
        layout: "layouts/main", 
        title: "Inicio",
        message: "Bienvenidos a nuestra aplicación de carga de archivos",
    });
})



// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
//   console.log(path.join(__dirname, "views"));
});