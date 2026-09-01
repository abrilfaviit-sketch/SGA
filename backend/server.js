const express =  require("express")
const app = express()
app.use(express.json()) //para q el servidor lo interprete
const alumnosRoutes = require("./routes/alumnos.routes.js")
app.use("/alumnos", alumnosRoutes)



let alumnos = [  //cambie el const por let
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

//creamos middleware
// app.use((req, res, next) => {
//     console.log(req.method)
//     console.log(req.url)
//     next() //esto lo q hace es mostrarte la respuesta el cuadrito 
// })


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



app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})

//01/0/26
//crear nuestro propio middleware y lo comente
//podemos observar cada petición antes de q continúe

