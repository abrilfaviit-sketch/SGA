 export function Navbar () //forma 2 el export
{
    return ( //todos retorna la info donde sean llamados
        <nav>
            <a href="#">Inicio</a><br></br>
            <a href="#">Alumnos</a><br></br>
            <a href="#">Docentes</a>
        </nav>
    )
}
//export default Navbar //forma 1
//la salida de nuestra app es app.jsx donde se le da la estrucutra, el main es donde llama a app.jsx y ahí sale