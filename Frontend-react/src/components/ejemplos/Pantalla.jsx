import {useEffect, useState} from "react"

function Pantalla() {
    const [ancho, setAncho] = useState(window.innerWidth);


    useEffect(() => {
        const actualizarAncho = () => {
            setAncho(window.innerWidth)
        }
        window.addEventListener("resize", actualizarAncho)
        
        return () => {
            window.removeEventListener("resize", actualizarAncho)
        }
    }, []) //los [] significa q solo se ejecuta una vez, cuando se monta el componente, y no se ejecuta cada vez que se renderiza el componente, y si le paso una variable, se ejecuta cada vez que esa variable cambia.

    return (
        <h2>Ancho: {ancho}px</h2>
    )
}
export default Pantalla

