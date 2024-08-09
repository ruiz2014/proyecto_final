/*ESTRUCTURA DEL PROYECTO */

trabajo2/ 

│ ├── public/ # Archivos estáticos como CSS, JS e imágenes

│ ├── src/

│ ├── config/ # Configuración de la aplicación
│ │ └── db.js # Configuración y conexión a MongoDB

│ │ │ ├── controllers/ # Controladores de la aplicación

│ │ └── apiControlles.js # Para el api esterno a usar
│ │ └── productsControlles.js # Funciones 
│ │ └── shopControlles.js #   Funciones (* para uso de react -no necesario *)

│ ├── models/ # Para uso de modelos en la aplicación

│ │ └── productModel.js # Estructura del modelo para productos 

│ ├── routes/ # Rutas de la aplicación

│ │ ├── productsRoutes.js # Rutas para la gestion de productos 
│ │ └── apiRoutes.js # Rutas para la gestión de api externa 
│ │ └── shopRoutes.js # Rutas para la gestión de productos (* para react - no necesario *) 

│ │ │ ├── views/ # Plantillas de Handlebars

│ │ ├── layouts/ # Layouts de la aplicación
│ │ │ └── main.hbs # Layout principal

│ │ ├── partials/ # Partials reutilizables

│ │ │ ├── header.hbs # Partial para el encabezado 
│ │ │ └── nav.hbs # Partial para el nav de página 
│ │ │ └── footer.hbs # Partial para el pie de página

│ │ └── index.hbs # Vista principal

│ │ └── app.js # Archivo principal de la aplicación

│

├── .env # Archivo de variables de entorno

├── .gitignore # Archivos y carpetas a ignorar por Git

├── package.json # Dependencias y scripts del proyecto

└── README.md # Este archivo

Instalacion

1 Clonar el Repositorio:

git clone <URL_DEL_REPOSITORIO> cd proyecto_final

Instalar Dependencias:

npm install

Configurar variables de Entorno

El archivo src/config/db.js gestiona la conexión a MongoDB.

Motor de Plantillas El proyecto utiliza Handlebars como motor de plantillas. Los archivos de plantilla se encuentran en src/views, archivos Estáticos Los archivos estáticos como CSS, JavaScript e imágenes se colocan en la carpeta public/.

El servidor se ejecutará en el puerto definido en tu archivo .env, por defecto 3005. Accede a la aplicación en http://localhost:3005.

