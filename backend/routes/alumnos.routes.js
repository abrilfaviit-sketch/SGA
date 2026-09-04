const express = require("express")
const { obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controllers.js")
const alumnos = require("../data/alumnos.js") // Importamos la lista de alumnos

const router = express.Router() // Router para agrupar y definir las rutas

// Rutas
router.get("/", obtenerAlumnos)

router.get("/:id", obtenerAlumno)

router.post("/", crearAlumno)

router.put("/", actualizarAlumno)

router.delete("/:id", eliminarAlumno)



// 31/08/26 creamos solicitud

module.exports = router// Exporta el router completo