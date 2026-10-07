// import Titulo from './components/Titulo' //le puedo cambiar el nombre
// import {Navbar} from  './components/Navbar' //al exportar así ya no lo puedo cambiar el nombre, ya que lo exporté con el mismo nombre, si lo exporto default puedo cambiarle el nombre al importarlo.
// import {Footer} from './components/Footer' //le digo q quiero importar el componente Footer.jsx
// import TarjetaAlumno from './components/TarjetaAlumno'
// import Incrementar from './components/ejemplos/Incrementar'
// import CambiarTitulo from './components/ejemplos/CambiarTitulo'
// // import {Adivina} from './components/ejemplos/Adivina'
// import Pantalla from "./components/ejemplos/Pantalla"
import { useState, useEffect } from "react"

// function App ()
// {
// const [contador, setContador] = useState(0)
// const [alumno] = useState({
//   nombre: "Ana Maria Polo",
//   curso: "Abogacia"
// })


// useEffect (() => {
//   document.title = `Alumno: ${alumno.nombre}`
// }, [alumno])


// useEffect (() => {
//   document.title = `Contador: ${contador}`
// }, [contador])
// return(
// <>  
// <h2>{contador}</h2>
//  <button onClick={() => setContador(contador + 1)}>+</button>
// </>
// )
// const [nombre, setNombre] = useState("")
// const [edad, setEdad] = useState(0)
// useEffect (() => {
//   console.log("Efecto")
// }, [nombre, edad])//el useEffect se ejecuta cada vez que se renderiza el componente, y si le paso un array vacio, se ejecuta solo una vez, y si le paso un array con una variable, se ejecuta cada vez que esa variable cambia.


// {/* <Titulo texto="Sistema de Gestión Académica" color =" orange"/> 
// <Navbar /> <br></br>
// <h2>Administración de Alumnos</h2>
// <TarjetaAlumno 
// nombre="Ana Maria Polo"
// carrera="Conductora"
// edad="56"/> <br></br>

// <TarjetaAlumno 
// nombre="Pepe Dominguez"
// carrera="Policia"
// edad="29"/>
// <br></br>
// <Footer /> */}
// {/* <Incrementar />
// <br></br>
// <CambiarTitulo />
// <br></br>
// <Adivina /> */}
function App() {
  const [nombre, setNombre] = useState("")

  useEffect(() => {
    if (nombre) {
      document.title = `Hola ${nombre}`
    } else {
      document.title = `Mi app`
    }
  }, [nombre])

return (
  <>
  <input
  value = {nombre}
  onChange={(e) => setNombre(e.target.value)}
  placeholder="Ingresa tu nombre" />
  <h2>Hola {nombre}</h2>
  </>
)
}


export default App
//ocupamos fragment <> </> para poder retornar varios elementos, ya que react solo puede retornar un elemento, y si queremos retornar varios elementos, los envolvemos en un fragment.
//prepare mi texto para q pase el titulo con props
//las props son de solo lectura
//react no trabaja con variables, es inmutable quiere decir q si trabajo con una variable comun no se puede cargar su variación de una forma normal o tipica, 
