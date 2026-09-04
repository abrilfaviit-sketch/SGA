// const docentes = require('../data/docentes')

// const obtenerDocentes = (req, res) {
//     res.json(docentes)
// }
const docentes = require("../data/docentes.js")

const obtenerDocentes = (req, res) => {
    res.json(docentes)
}

function obtenerDocente (req, res){
    const id = Number (req.params.id)
    const docente = docentes.find(d => d.id === id)
    if (!docente) {
        return res.status(404).json({
            mensaje:"Docente no encontrado"
        })
    }
    res.json(docente)
}

function crearDocente  (req, res) {
    const nuevoDocente = req.body
    const {id, nombre, carrera } = req.body
    if (!id || !nombre || !carrera){
        return res.status(400).json({
            mensaje:"Todos los campos son obligatorios"
            })
    }
    if (typeof nombre !== "string"){
        return res.status(400).json({
            mensaje:"El nombre debe ser un texto"
        })
    }

    docentes.push(nuevoDocente)
    res.status(201).json({
         mensaje: "Docente registrado correctamente" 
        })
}

function actualizarDocente (req, res)  {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)
    if(!docente){
       return res.status(404).json({
            mensaje:"Docente no encontrado"
        })
    }
    docente.nombre = req.body.nombre
    docente.carrera = req.body.carrera

    res.json({mensaje:"Docente actualizado correctamente"})
}

function eliminarDocente  (req, res)  {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)
    if(!docente){
       return res.status(404).json({
            mensaje:"Docente no encontrado"
        })
    }
    const docentesActualizados = docentes.filter(docente => docente.id !== id)

    docentes.length = 0
    docentes.push(...docentesActualizados)

    res.json({mensaje: "Docente eliminado correctamente"})
}

module.exports = { obtenerDocentes,
                   obtenerDocente,
                   crearDocente, 
                   actualizarDocente,
                   eliminarDocente }