// const alumnos = [
//     {
//         id: 1,
//         nombre: "Juan"
//     },
//     {
//         id:2,
//         nombre: "Abril"
//     }
// ];
// function obtenerAlumnos(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(alumnos)
//         }, 2000)
//     })
// }

// async function iniciar(){
//     const datos = await obtenerAlumnos()
//     console.table(datos)
// }
// iniciar()

// //crear obtener materias()
// //crear obtener docentes
// //mostrar los datos a traves de async await

// const materias = [
//     {
//         nombre: "Literatura",
//         horarios: "Lunes y Miercoles 10:00 a 12:00"
//     },
//     {
//         nombre: "Fisica",
//         horarios: "Martes y Jueves 14:00 a 16:00"
//     }
// ];

// function obtenerMaterias(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(materias)
//         }, 2000)
//     })
// }

// async function mostrarMaterias(){
//     const materias = await obtenerMaterias()
//         console.table(materias)

// }
// mostrarMaterias()

// const docentes = [
//     {
//         nombre: "Juan",
//         apellido: "Perez"
//     },
//     {
//         nombre: "Ana",
//         apellido: "Gomez"
//     }
// ];

// function obtenerDocentes(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(docentes)
//         }, 2000)
//     })
// }

// async function mostrarDocentes(){
//     const docentes = await obtenerDocentes()
//         console.table(docentes)

// }
// mostrarDocentes()

// async  function obtenerAlumnos(){
// const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")   
// const alumnos = await respuesta.json() 
// return alumnos
// }
// function mostrarAlumnos(alumnos){
//    //  console.table(alumnos)
//     console.log(typeof alumnos )
//     localStorage.setItem("alumnos", JSON.stringify(alumnos)) 
//     const datos = localStorage.getItem("alumnos")
//     console.log(typeof datos)
//     console.log(datos)
//     const alumnosRecuperados = JSON.parse(datos) 
//     console.log( typeof alumnosRecuperados) 
//     console.table(alumnosRecuperados)



// for (const alumno of alumnos) {
//     console.log(alumno.id, alumno.name, alumno.email)
// }
//}

//  async function iniciar(){
//     const alumnos = await obtenerAlumnos()
//     mostrarAlumnos(alumnos)
//  }
// iniciar()

// /post
// /comments
// de cada uno solo el id, titulo y usuario

// async function obtenerPosts(){
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const post = await respuesta.json()
//     return post
// }

// function mostrarPosts(post){
//     for ( const p of post) {
//         console.log(p.id, p.title, p.userId)
//     }

// }
//  async function iniciarPosts(){
//     const post = await obtenerPosts()
//     mostrarPosts(post)
//  }
//  iniciarPosts()


//  async function obtenerComments(){
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments") //puedo indicar un limite
//     const comments = await respuesta.json()
//     return comments
// }

// function mostrarComments(comments){
//     for ( const c of comments) {
//         console.log(c.postId, c.name, c.id)
//     }

// }
//  async function iniciarComments(){
//     const comments = await obtenerComments()
//     mostrarComments(comments)
//  }
//  iniciarComments()


//variables globales y y estados
const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")
let alumnosEditandoLegajo = null
let alumnoEditar = null
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display = "none"
const btnGuardar = document.querySelector("#btnGuardar")
const API_ALUMNOS = "http://localhost:3000/alumnos"
//
// async function cargarAlumnos(){
//    const respuesta = await fetch("http://localhost:3000/alumnos")
//    const alumnos = await respuesta.json()
//    console.table(alumnos)
// }
// cargarAlumnos()


//inicio de submit y captura de input
formulario.addEventListener("submit", async function (event) {
   event.preventDefault(); //el preventDefault () evita q' se recargue la página

   const legajo = document.querySelector("#legajo").value.trim()
   const nombre = document.querySelector("#nombre").value.trim() //los trim()guardan el texto de los input
   const carrera = document.querySelector("#carrera").value.trim() //sin espacios sobrantes
   const correo = document.querySelector("#correo").value.trim()
   //

   //Validaciones
   if (legajo === "" || nombre === "" || carrera === "" || correo === "") {
      mostrarMensaje("Todos los campos son obligatorios", "mje-error") //revisa q no haya campos vacios
      return
   }

   if (!correo.includes("@")) {
      mostrarMensaje("Ingrese un correo electronico válido", "mje-error") // q el correo lleve el @ 
      return
   }

   if (nombre.length < 3) {
      mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error") // q el nombre contenga minimo 3 letras
      return
   }
   //

   

   //POST xq hay q hacer un nuevo alumno
   if (alumnosEditandoLegajo === null) { //si esto da null el sistema entiende q'no esta editando nadie y entra en el if
      //creación de los objetos
      const alumno = { //crea un objeto alumno 
         legajo: Number(legajo), //convierte el legajo a número
         nombre: nombre,
         carrera: carrera,
         correo: correo
      }
      //borramos el push xq ya no estamos trabajando con storage
      const respuesta = await fetch(API_ALUMNOS, {
         method: "POST",
         headers: {
            "Content-Type": "application/json" //le decimos q' le vamos a pasar un json
         },
         body: JSON.stringify(alumno)
      })
      if (!respuesta.ok) {//respuesta no ok significa q' hubo un error en la petición
         mostrarMensaje("No se pudo guardar el alumno", "mje- error") //muestra mensaje de error
         return
      }
      mostrarMensaje("Alumno guardado correctamente", "mje-exito") //muestra el mensaje de exito
      //

      //Alumno editando (modo modificación) PUT
   } else { //si tiene un id significa q' estas editando asi q' entra por el else para editarlo
      const datosActuales = { //crea un objeto temporal con los datos q' el usuario acaba de escribir en los input
         nombre: nombre,// q' solo sirve
         carrera: carrera,//para luego
         correo: correo //comparar
      }
      if (JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)) {    //opción 2 //lo actualiza con json.stringify
         mostrarMensaje("No se realizaron cambios", "mje-adv") //muestra mensaje de advertencia
         return
      }
      //si no cambia nada corta la ejecución
      const respuesta = await fetch(`${API_ALUMNOS}/${alumnosEditandoLegajo}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ //cuerpo del legajo, nombre, carrera y correo q' se van a actualizar
            nombre: nombre,
            carrera: carrera,
            correo: correo
         })
      })
      if(!respuesta.ok){
         mostrarMensaje("No se pudo actualizar el alumno", "mje-error")
         return 
      }
      alumnosEditandoLegajo = null
      alumnoEditar = null
      btnGuardar.textContent = "Guardar Alumno"
      document.querySelector("#legajo").disabled = false //habilita el input legajo para q' se pueda modificar
      mostrarMensaje("Alumno actualizado correctamente") //muestra mensaje
   }
  //
   await actualizarListaAlumnos() //vuelve a dibujar la tabla
   formulario.reset() //vacia el formulario
});
//

//Función de lectura
async function obtenerAlumnos() { //pide la lista de alumnos
   const respuesta = await fetch(API_ALUMNOS) //trae la lista de alumnos del backend, la declaramos a la variable arriba, para no poner todas las veces la ruta
   const alumnos = await respuesta.json() //convierte la respuesta en un objeto
   return alumnos //devuelve la lista de alumnos
}
//



function mostraAlumnos(alumnos) { //vacia las tablas
   listaAlumnos.innerHTML = "" //
   for (const alumno of alumnos) { //inyecta las filas con un bucle for or 
      listaAlumnos.innerHTML += `
      <tr>
         <td>${alumno.legajo}</td>
         <td>${alumno.nombre}</td>
         <td>${alumno.carrera}</td>
         <td>${alumno.correo}</td>
         <td> 
            <button class="btn-editar" data-legajo="${alumno.legajo}">Editar</button>  
            <button class="btn-eliminar" data-legajo="${alumno.legajo}">Eliminar</button>
            </td>
      </tr>
      `;//con data-legajo le asigna a cada botón el legajo del alumno, fila 258 y259
   } //lineas 210 y 211 se vinculo los botones con los legajos de los alumnos
}
//Eliminar alumno
 async function eliminarAlumno(legajo) { //funcion q' se activa al apretar el boton eliminar
   const respuesta = await fetch( `${API_ALUMNOS}/${legajo}`,{
      method: "DELETE"
   })
   if(!respuesta.ok){
       mostrarMensaje("No se pudo eliminar el alumno", "mje-error")//muestra un mensaje de exito
       return
   }
   if(alumnoEditandoLegajo === legajo){
      formulario.reset() //vacia el formulario
      alumnoEditar = null
      alumnosEditandoLegajo = null
      btnGuardar.textContent = "Guardar Alumno"
      document.querySelector("#legajo").disabled = false //habilita el input legajo para q' se pueda modificar
      btnCancelar.style.display = "none" //oculta el botón cancelar
   }
   mostrarMensaje("Alumno eliminado correctamente", "mje-exito")//muestra un mensaje de exito
   await actualizarListaAlumnos()
  
}
async function actualizarListaAlumnos(){
   const alumnos = await obtenerAlumnos() //trae los alumnos y los muestra
   mostraAlumnos(alumnos) //dibuja la tabla
}

//Delegación de eventos (clics en table)
listaAlumnos.addEventListener("click", (e) => { //escuchá los clics en la tabla
   if (e.target.classList.contains("btn-eliminar")) {//si tocas el botón eliminar
      const legajo = Number(e.target.dataset.legajo) //saca el data-id del botón
      eliminarAlumno(legajo) // ejecuta la acción correspondiente
   }
   if (e.target.classList.contains("btn-editar")) { // o tocas el botón editar 
      const legajo = Number(e.target.dataset.legajo) //saca el data-id del botón
      editarAlumno(legajo) //ejecuta la acción correspondiente
   }
})
//

//Cargar datos para editar
 async function editarAlumno(legajo) { //función q' se activa a apretar editar
   const alumnos =  await obtenerAlumnos() //trae el array guardado en el storage.js
   const alumno = alumnos.find(alumno => alumno.legajo === legajo) //de todo el array busca el q' coincida con el legajo
   
   if(!alumno){
      mostrarMensaje("Alumno no encontrado", "mje-error") //muestra mensaje de error
      return
   }
   document.querySelector("#legajo").value = alumno.legajo; //carga el legajo del alumno en la casilla
   document.querySelector("#legajo").disabled = true; //deshabilita el input legajo para q' no se pueda modificar
   document.querySelector("#nombre").value = alumno.nombre; //carga el nombre del alumno en la casilla
   document.querySelector("#carrera").value = alumno.carrera; //carrrera
   document.querySelector("#correo").value = alumno.correo; //correo

   alumnoEditar = { //pasa sus datos a los input
      nombre: alumno.nombre,
      carrera: alumno.carrera,
      correo: alumno.correo
   }

   alumnosEditandoLegajo = alumno.legajo; //guarda el legajo del alumno q' se esta editando
   btnCancelar.style.display = "inline-block" //muestra el botón cancelar

   btnGuardar.textContent = "Actualizar Alumno" //cambia el texto del botón a guardar
   document.querySelector("#nombre").focus()//Hace que el cursor empiece a parpadear automáticamente dentro del campo "Nombre", listo para que el usuario escriba directamente sin tener que hacer clic con el mouse.
}
//


//Cancelar edición
function cancelarEdicion() {//limpia la pantalla y vuelve el formulario a modo crear
   formulario.reset() //vacia los input
   alumnosEditandoLegajo = null//Borra el legajo guardado en memoria
   alumnoEditar = null//borra la copia del objeto creada para comparar
   btnGuardar.textContent = "Guardar Alumno"
   document.querySelector("#legajo").disabled = false //habilita el input legajo para q' se pueda modificar
   btnCancelar.style.display = "none" //oculta el botón cancelar
   document.querySelector("#legajo").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion) //vuelve al sistema en modo "Alta"
//

// Carga inicial 
async function iniciar() {
   await actualizarListaAlumnos() //trae la lista de alumnos y los muestra
}
iniciar()

