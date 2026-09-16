const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors()) // para q el servidor acepte peticiones de otros dominios

// Middleware para procesar JSON
app.use(express.json()) // para q el servidor lo interprete
app.use(cors()) // para q el servidor acepte peticiones de otros dominios

// Rutas de Alumnos
const alumnosRoutes = require("./routes/alumnos.routes.js")
// console.log("Alumnos routes:", alumnosRoutes) // lo usea para saber donde estaba mi error
app.use("/alumnos", alumnosRoutes)
const conectarBD = require("./data/config/database.js")
require("dotenv").config()//para q busque en el archivo .env la variable de entorno
const PORT = process.env.PORT //para q busque en el archivo .env la variable de entorno, y triga lo q tiene la variable
conectarBD()

// Rutas de Docentes
const docentesRoutes = require("./routes/docentes.routes.js")
// console.log("Docentes routes:", docentesRoutes) //lo use para saber donde tenía mi error
app.use("/docentes", docentesRoutes)

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)//
})

//01/0/26
//crear nuestro propio middleware y lo comente
//podemos observar cada petición antes de q continúe