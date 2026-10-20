import { useEffect, useState} from 'react'
const API_ALUMNOS = "http://localhost:3000/alumnos"

    export function ListaAlumnos (actualizar, onAlumnoCreado, onEditarAlumno){ //el onAlumnoCreado hace q se ejeucte la función y actualiza el valor del estado a 1 más, para q el useState cambie y me muestre los datos de vuelta
    const [alumnos, setAlumnos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

        async function eliminarAlumno(legajo){
            const confirmar = window.confirm("Seguro que querés eliminar este alumno?") //en caso de okey me da true
            if (!confirmar) { //si puso cancelar, es distinto de true
                return
            }
            try{
                const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`, //pedir por ese alumno osea individual, atras de la barra va el número de legajo
                    {method: "DELETE" } //acá no se necesita cuerpo
                ) 
                if (!respuesta.ok) {
                    throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`) //error 404 no existe el alumno, si no pasa por acá singifica q no hubo error
                }
                onAlumnoCreado()//ejecuto y actualiza esto
            }catch (error){
                console.error("Error al eliminar: ", error)
                alert(error.message || "No se pudo eliminar alumno") 
            }
        }

        useEffect(() => {
            async function cargarAlumnos() {
                setCargando(true)
                setError("")

                try {
                const respuesta = await fetch(API_ALUMNOS)

                if (!respuesta.ok) {
                    throw new Error ("No se pudo obtener la lista", respuesta.status)
                }

                const datos = await respuesta.json()
                setAlumnos(datos)
            } catch (error){
                console.error("Error de conexión", error)
                setError("No se pudo cargar la lista de alumnos.")
            }finally {
                setCargando(false)
            }
        }
            cargarAlumnos()
        }, [actualizar])

        if (cargando) {
            return <p>Cargando alumnos...</p>
        }
        if (error){
            return <p role="alert">{error}</p>
        }
        return (
            <section>
        <h2>Alumnos</h2>
        {alumnos.length === 0 
        ? (<p>No hay alumnos registrados.</p>)
            :(
               <ul style={{listStyle: "none"}}>
                {alumnos.map(alumno => (
            <li key={alumno.legajo}>
                {alumnos.legajo} - {alumno.nombre} - {alumno.carrera} 
                <br />
                <button type="buttton"
                onClick={() => onEditarAlumno(alumno)}> {/*alumno representa cada uno de los elementos*/}
                    Editar
                </button>
                <button type="button" 
                onClick={()=> eliminarAlumno(alumno.legajo)} //función flecha para esperar a q el usuario haga clic para llamar a la función
                >
                    Eliminar
                </button>
            </li>
                ))}
                </ul>

        )}
        </section>
        )}