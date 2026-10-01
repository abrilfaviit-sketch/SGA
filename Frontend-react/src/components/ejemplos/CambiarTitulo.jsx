import { useState } from 'react'

function CambiarTitulo() {
    const [titulo, setTitulo] = useState("Inicio")


        return (
            <>
            <h2>{titulo}</h2>
            <div style={{display: "flex", justifyContent: "center", gap: "18px"}}>
                <button onClick={() => setTitulo("Alumnos")} style={{ marginRight: "10px", width: "100px", height: "40px", color:'yellow' }}>Alumnos</button>
                <button onClick={() => setTitulo("Profesores")} style={{ marginRight: "10px", width: "100px", height: "40px", color:'skyblue' }}>Profesores</button>
            </div>
            </>
        )
}

export default CambiarTitulo