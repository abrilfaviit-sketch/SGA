// const alumnos = require('../data/alumnos')

// const obtenerAlumnos = (req, res) {
//     res.json(alumnos)
// }
const Alumno = require("../models/Alumno.js")//con este nuevo modelo ocupo nuevas funciones, de aca saca el esquema correspondiente
//requiere conexion asincrona, xq el recurso está afuera de la app
// 

async function obtenerAlumnos (req, res){
    const alumnos = await Alumno.find() //find es una funcion de mongoose q me permite buscar todos los alumnos
    res.json(alumnos)
}
async function obtenerAlumno (req, res){ //findById es una funcion de mongoose q me permite buscar un alumno por su id
    const alumno = await Alumno.findOne({
        legajo: Number(req.params.id)
    })//findOne es una funcion de mongoose q me permite buscar un alumno por su legajo
    if (!alumno) {
        return res.status(404).json({
            mensaje:"Alumno no encontrado"
        })
    }
    res.json(alumno)
}

async function crearAlumno  (req, res) {
    const {legajo, nombre, carrera, correo} = req.body
    if (!legajo || !nombre || !carrera || !correo){
        return res.status(400).json({
            mensaje:"Todos los campos son obligatorios"
            })
    }
    if (typeof nombre !== "string"){
        return res.status(400).json({
            mensaje:"El nombre debe ser un texto"
        })
    }
    if (typeof legajo !== "number"){
        return res.status(400).json({
            mensaje: "El legajo debe ser un número"
        })
    }
    const existe = await Alumno.findOne({
        legajo
    })
    if (existe){
        return res.status(400).json({
            mensaje: "El legajo ya existe"
        })
    }


  const nuevoAlumno = await Alumno.create({
    legajo,
    nombre,
    carrera,
    correo
  })
  res.status(201).json(nuevoAlumno)
       
}

async function actualizarAlumno (req, res)  {
    const {nombre, carrera, correo} = req.body //desestructuro el body para obtener los datos que quiero actualizar
    const alumno = await Alumno.findOneAndUpdate(
       { legajo: Number(req.params.id)},
        {nombre, carrera, correo},
        {returnDocument: "after"}//devuelve el documento viejo 
    )
    if(!alumno){
       return res.status(404).json({
            mensaje:"Alumno no encontrado"
        })
    }
    res.json(alumno)
}

async function eliminarAlumno  (req, res)  {
    const alumno = await Alumno.findOneAndDelete(
        {legajo: Number(req.params.id)}
    )
    if(!alumno){
       return res.status(404).json({
            mensaje:"Alumno no encontrado"
        })
    }
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = { obtenerAlumnos, 
    obtenerAlumno, 
    crearAlumno, 
    actualizarAlumno, 
    eliminarAlumno }