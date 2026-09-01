const express = require("express")
const router = express.Router() //router para grupar y definir los archivos

router.get("/", (req, res) => {
    res.json(docentes)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const docente = docentes.find(a => a.id === id)
    res.json(docente)
})