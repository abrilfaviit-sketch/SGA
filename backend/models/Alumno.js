//encargado de brindarme herramientas para q' luego pueda conectarme a la base de datos
//una carpeta alumnos representa el encargado de manejar archivos, como de borrar tal ficha, modificarla o demas
//se encarga de buscar información 
const mongoose = require("mongoose")

const alumnoSchema = new mongoose.Schema({ //describe la estructura 
    legajo:{
        type: Number,//convierte el valor a un valor entero
        unique: true, //para q no se repita el legajo

    },
    nombre: String,
    carrera: String,
    correo: String
},
{
    versionKey: false //para q no me muestre la version de la base de datos
}
)

const Alumno = mongoose.model("Alumno", alumnoSchema) //model permite trabajar con esa lista de alumnos, mogoose se encarga de guardar

module.exports = Alumno
