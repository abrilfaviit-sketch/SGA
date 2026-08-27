const express =  require("express")
const app = express()

const alumnos = [
    {
        id: 1,
        nombre: "julian",
        carrera: "Programación"
    },
    {
        id:2,
        nombre: "Pepe",
        carrera: " Musica"
    },
    {
        id:3,
        nombre: "Pipo",
        carrera: "Literatura"
    },
    {
        id:4,
        nombre: "Maria",
        carrera: "Base de datos"
    },
    {
        id:5,
        nombre:"Marta",
        carrera:"Matematicas"
    },
    {
        id:6,
        nombre:"Ana",
        carrera:"Organizacion de empresas"
    }
]
app.get("/alumnos", (req, res) => {
    res.json(alumnos)
})

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
})


app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})

//hacer docentes 5 
const docentes = [
    {
        id: 1,
        nombre: "juliana",
        carrera: "Programación"
    },
    {
        id:2,
        nombre: "Pepito",
        carrera: " Musica"
    },
    {
        id:3,
        nombre: "Delia",
        carrera: "Literatura"
    },
    {
        id:4,
        nombre: "Mariano",
        carrera: "Base de datos"
    },
    {
        id:5,
        nombre:"Marttita",
        carrera:"Matematicas"
    },
    {
        id:6,
        nombre:"Analia",
        carrera:"Organizacion de empresas"
    }
]
app.get("/docentes", (req, res) => {
    res.json(docentes)
})

app.get("/docentes/:id", (req, res) => {
    const id = Number(req.params.id)
    const docente = docentes.find(a => a.id === id)
    res.json(docente)
})