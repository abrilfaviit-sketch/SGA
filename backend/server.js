const express = require("express")
const app = express()

// Middleware para procesar JSON
app.use(express.json()) // para q el servidor lo interprete

// Rutas de Alumnos
const alumnosRoutes = require("./routes/alumnos.routes.js")
console.log("Alumnos routes:", alumnosRoutes)
app.use("/alumnos", alumnosRoutes)

// Rutas de Docentes
const docentesRoutes = require("./routes/docentes.routes.js")
console.log("Docentes routes:", docentesRoutes)
app.use("/docentes", docentesRoutes)

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})

//01/0/26
//crear nuestro propio middleware y lo comente
//podemos observar cada petición antes de q continúe