import { useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"

function FormularioA({onAlumnoCreado}) {
    const [formulario, setFormulario] = useState({
        legajo: "",
        nombre: "",
        carrera: "",
        correo: ""
    })
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false) //lo vamos a ocupar como un booleano

    function manejarCambio(e) { //encargada de escuchar los eventos de los inputs
        const { name, value } = e.target //de e.target voy a ocupar estos objetos, name nombre del input y el valor, value

        setFormulario({
            ...formulario,  //traeme toda la info sin modificarme nada
            [name]: value  //y el name se relaciona con el value
        })
    }

    // const [nombre, setNombre] = useState("")
    // const[correo, setCorreo] = useState("")
    // const [legajo, setLegajo] = useState("")
    // const [carrera, setCarrera] = useState("")

    async function guardar(e) {
        e.preventDefault()
        setError("") //por si hay un error q me lo muestre en el campo
        setGuardando(true) //si hago clic en guardar y lo ponemos en true para decirle q se está guardando
        // console.log(nombre)
        // console.log(correo)
        // console.log(legajo)
        // console.log(carrera)
        try{
            const alumno = {
                ...formulario,
                legajo: Number(formulario.legajo) //para q el legajo sea un número
            }
            const respuesta  = await fetch(API_ALUMNOS, { //recice la respuesta
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(alumno)
            })
            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({ //se resetea el formulario 
                legajo: "",
                nombre: "",
                carrera: "",
                correo: ""
        })
        onAlumnoCreado()
    } catch (error) { //si pasa pasa el catch
        console.error("Error al guardar:", error)
        setError(error.message || "No se pudo conectar con el servidor") //si no hay error tira un mensaje generico   
    } finally {
        setGuardando(false) //cuando termina de guardar, lo ponemos en false para q quede todo en estado inicial 
    }
}


    return (
        <>
            <form onSubmit={guardar}>
                <label htmlFor="legajo">Lejago:</label>
                <input 
                id="legajo"
                name="legajo"
                value={formulario.legajo}
                onChange={manejarCambio}
                required
                />
                <label htmlFor="nombre">Nombre:</label>
                <input
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
                />
                <label htmlFor="carrera">Carrera:</label>
                <input
                id="carrera"
                name="carrera"
                value={formulario.carrera}
                onChange={manejarCambio}
                required
                />
                <label htmlFor="correo">Correo:</label>
                <input
                id="correo"
                name="correo"
                value={formulario.correo}
                onChange={manejarCambio}
                required
                />

                <button type="submit" disabled={guardando}>
                    {guardando ? "Guardando..." : "Guardar"} 
                </button>

                <br></br>
                
                {error && <p role="alert">{error}</p>}

            </form>
        </>
    )
}

export default FormularioA