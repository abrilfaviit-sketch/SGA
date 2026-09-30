function Titulo ({texto, color })//(props) props es una objeto q recibe más de 1 elemento 
{
    return (
        <h1 style= {{color: color}}>{texto}</h1>
    )
}
export default Titulo
//o le puedo sacar props y pongo texto y color y cambio el h1
