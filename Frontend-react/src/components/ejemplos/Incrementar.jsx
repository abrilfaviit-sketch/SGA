// function Incrementar ()
// {
//     let contador = 0 

//     function incremento(){
//         contador++
//         console.log(contador)
//     }

//     return (
//         <>
//         <h1>Contador: {contador}</h1>
//         <button onClick={incremento}>Incrementar</button>
//         </>
//     )
// } 
// export default Incrementar 
//para probar q una función comun no la ejecuta react, ya que react es inmutable y no trabaja con variables, por eso no se puede cargar su variación de una forma normal o tipica.

//versión react 
import { useState} from 'react'

function Incrementar ()
{
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)
    

    function incremento(){
        setContador(contador + 1)
    }
    function decremento(){
        if (contador > 0)
        setContador(contador - 1)
    }
    return (
        <>
        <h1>Contador: {contador}</h1>
        {/* <button onClick={() => setContador(0)}>Borrar</button><br></br> */}
        <div style={{display: "flex", justifyContent: "center", gap: "18px"}}> 
        <button onClick={incremento} style={{width: "50px", height: "50px", fontSize: "24px"}}>+</button><br></br>
        <button onClick={decremento} style={{width: "50px", height: "50px", fontSize: "24px"}}>-</button><br></br>
        </div>
        <br></br>
        <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
        {mostrar && <p>Hola Ana Maria Polo</p>}
        </>
    )
} 
export default Incrementar 