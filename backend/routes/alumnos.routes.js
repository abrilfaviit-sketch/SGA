const express = require("express")
const router = express.Router() //router para grupar y definir los archivos

router.get("/", obtenerAlumnos)

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
})
//31/08/26 creamos solicitud
router.post("/", (req, res) => {
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje: "Alumno registrado correctamente"})
})
router.put("/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje:"Alumno actualizado correctamente"})
})

router.delete("/:id",  (req, res) => {  //no se puede poner filter ya q me modifica el array y es const y no se puede así q cambio const por let
    const id = Number(req.params.id)
    alumnos = alumnos.filter(alumno => alumno.id !== id)
    res.json({mensaje: "Alumno eliminado correctamente"})
})

module.exports = router //solicita cualquier ruta escrita