import Titulo from './components/Titulo' //le puedo cambiar el nombre
import {Navbar} from  './components/Navbar' //al exportar así ya no lo puedo cambiar el nombre, ya que lo exporté con el mismo nombre, si lo exporto default puedo cambiarle el nombre al importarlo.
import {Footer} from './components/Footer' //le digo q quiero importar el componente Footer.jsx
import TarjetaAlumno from './components/TarjetaAlumno'
function App ()
{
  return(
    <> 
      <Titulo texto="Sistema de Gestión Académica" color =" orange"/> 
      <Navbar /> <br></br>
      <h2>Administración de Alumnos</h2>
      <TarjetaAlumno 
      nombre="Ana Maria Polo"
      carrera="Conductora"
      edad="56"/> <br></br>
      
      <TarjetaAlumno 
      nombre="Pepe Dominguez"
      carrera="Policia"
      edad="29"/>
      <br></br>
      <Footer />
    </>
  )
}
export default App 
//ocupamos fragment <> </> para poder retornar varios elementos, ya que react solo puede retornar un elemento, y si queremos retornar varios elementos, los envolvemos en un fragment.
//prepare mi texto para q pase el titulo con props
//las props son de solo lectura
