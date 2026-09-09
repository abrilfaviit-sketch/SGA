//Función para guardar datos
function guardarDatos (clave,datos) { //recibe la clave alumnos y el array de objetos
    localStorage.setItem(clave, JSON.stringify(datos)) //usa stringify para convertir el array a texto
}//localStorage solo puede guardar string
//

function obtenerDatos(clave) {
   const datos = localStorage.getItem(clave)//busca en el localStorage usando la clave
   if (datos) {//si encuentra datos
      return JSON.parse(datos)//usa json.parse() para convertir el texto de vuelta en un array de objetos.
   }
   return [] //si no hay nada guardado todavía (null) devuelve vacio [] para q' el código no falle
}