const express = require("express")
const { obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controllers.js")
const docentes = require("../data/docentes.js") // Importamos la lista de docentes

const router = express.Router() // Router para agrupar y definir las rutas

// Rutas
router.get("/", obtenerDocentes)

router.get("/:id", obtenerDocente)

router.post("/", crearDocente)

router.put("/", actualizarDocente)

router.delete("/:id", eliminarDocente)



// 31/08/26 creamos solicitud

module.exports = router// Exporta el router completo