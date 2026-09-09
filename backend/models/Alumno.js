//encargado de brindarme herramientas para q' luego pueda conectarme a la base de datos
//una carpeta alumnos representa el encargado de manejar archivos, como de borrar tal ficha, modificarla o demas
//se encarga de buscar información 
const mongoose = require("mongoose")

const alumnoSchema = new mongoose.Schema({ //describe la estructura 
    legajo: Number,
    nombre: String,
    carrera: String,
    correo: String
})

const Alumno = mongoose.model("Alumno", alumnoSchema) //model permite trabajar con esa lista de alumnos, mogoose se encarga de guardar

module.exports = Alumno
