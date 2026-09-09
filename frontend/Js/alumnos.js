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
let alumnosEditandoId = null
let alumnoEditar = null
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display = "none"
const btnGuardar = document.querySelector("#btnGuardar")
//

//inicio de submit y captura de input
formulario.addEventListener("submit", function (event) { 
   event.preventDefault(); //el preventDefault () evita q' se recargue la página

   const nombre = document.querySelector("#nombre").value.trim() //los trim()guardan el texto de los input
   const carrera = document.querySelector("#carrera").value.trim() //sin espacios sobrantes
   const correo = document.querySelector("#correo").value.trim()
   //

//Validaciones
   if(nombre === "" ||  carrera === "" || correo === "") { 
      mostrarMensaje("Todos los campos son obligatorios", "mje-error") //revisa q no haya campos vacios
      return 
   }

   if (!correo.includes ("@")){
      mostrarMensaje("Ingrese un correo electronico válido", "mje-error") // q el correo lleve el @ 
      return
   }

   if(nombre.length < 3 ) {
      mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error") // q el nombre contenga minimo 3 letras
      return
   }
//

//Crear alumno (modo alta)
   const alumnos = obtenerAlumnos()//busca la lista en el storage.js
   //console.log(nombre, carrera, correo) //para ver la info q' contiene

   if (alumnosEditandoId === null){ //si esto da null el sistema entiende q'no esta editando nadie y entra en el if
   //creación de los objetos
   const alumno = { //crea un objeto alumno 
      id: Date.now(), //con ID unico
      nombre: nombre,
      carrera: carrera,
      correo: correo
   }
   alumnos.push(alumno) // lo suma al array con .push()
   mostrarMensaje("Alumno guardado correctamente", "mje-exito") //muestra el mensaje de exito
//

//Alumno editando (modo modificación)
}else{ //si tiene un id significa q' estas editando asi q' entra por el else para editarlo
   const alumno = alumnos.find(alumno => alumno.id === alumnosEditandoId) //busca alumno por ID
   alumno.nombre = nombre
   alumno.carrera = carrera
   alumno.correo = correo

   const datosActuales = { //crea un objeto temporal con los datos q' el usuario acaba de escribir en los input
      nombre: nombre,// q' solo sirve
      carrera: carrera,//para luego
      correo: correo //comparar
   }
   // if(datosActuales.nombre === alumnosEditar.nombre &&      //opción 1
   //    datosActuales.carrera === alumnosEditar.carrera &&
   //     datosActuales.correo === alumnosEditar.correo){
   //    mostrarMensaje ("No se realizaron cambios", "mje-error")
   //    return
   //     }
   if (JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){    //opción 2 //lo actualiza con json.stringify
      mostrarMensaje ("No se realizaron cambios", "mje-adv") //muestra mensaje de advertencia
      return 
   }
   //si no cambia nada corta la ejecución
   alumnosEditandoId = null
   alumnoEditar = null
   btnGuardar.textContent = "Guardar Alumno"

   mostrarMensaje("Alumno actualizado correctamente") //muestra mensaje
}
//

//Guardado, renderizado y reset
   //localStorage.setItem("alumnos", JSON.stringify(alumnos))
   guardarDatos("alumnos", alumnos) //persiste los cambios en el almacenamiento
   mostraAlumnos(alumnos) //vuelve a dibujar la tabla
   formulario.reset() //vacia el formulario
});
//

//Función de lectura
function obtenerAlumnos() { //pide la lista de alumnos
  return obtenerDatos("alumnos") // q' está guardada en el storage.js
}
//



function mostraAlumnos(alumnos) { //vacia las tablas
   listaAlumnos.innerHTML = "" //
   for (const alumno of alumnos) { //inyecta las filas con un bucle for or 
      listaAlumnos.innerHTML += `
      <tr>
         <td>${alumno.id}</td>
         <td>${alumno.nombre}</td>
         <td>${alumno.carrera}</td>
         <td>${alumno.correo}</td>
         <td> 
            <button class="btn-editar" data-id="${alumno.id}">Editar</button>  
            <button class="btn-eliminar" data-id="${alumno.id}">Eliminar</button>
            </td>
      </tr>
      `;//con data-id le asigna a cada botón el id del alumno, fila 258 y259
   } //lineas 210 y 211 se vinculo los botones con los id de los alumnos
}
//Eliminar alumno
function eliminarAlumno(id) { //funcion q' se activa al apretar el boton eliminar
   const alumnos = obtenerAlumnos() //llama a la lista guardada en storage.js
   const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id); //usa .filter() para armar un array sin el alumno borrado
   localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados)) //guarda 
   mostraAlumnos(alumnosActualizados)//refresca la tabla

   mostrarMensaje("Alumno eliminado correctamente", "mje-exito")//muestra un mensaje de exito
}
//

//Delegación de eventos (clics en table)
listaAlumnos.addEventListener("click", (e) => { //escuchá los clics en la tabla
   if (e.target.classList.contains("btn-eliminar")) {//si tocas el botón eliminar
      const id = Number(e.target.dataset.id) //saca el data-id del botón
      eliminarAlumno(id) // ejecuta la acción correspondiente
   }
   if (e.target.classList.contains("btn-editar")){ // o tocas el botón editar 
      const id = Number(e.target.dataset.id) //saca el data-id del botón
      editarAlumno(id) //ejecuta la acción correspondiente
   }
})
//

//Cargar datos para editar
function editarAlumno(id) { //función q' se activa a apretar editar
   const alumnos = obtenerAlumnos() //trae el array guardado en el storage.js
   const alumno = alumnos.find(alumno => alumno.id === id) //de todo el array busca el q' coincida con el id
   document.querySelector("#nombre").value = alumno.nombre; //carga el nombre del alumno en la casilla
   document.querySelector("#carrera").value = alumno.carrera; //carrrera
   document.querySelector("#correo").value = alumno.correo; //correo

   alumnoEditar = { //pasa sus datos a los input
      nombre: alumno.nombre,
      carrera: alumno.carrera,
      correo: alumno.correo
   }

   alumnosEditandoId = id; //guarda el id del alumno q' se esta editando
   btnCancelar.style.display = "inline-block" //muestra el botón cancelar
   btnGuardar.textContent = "Actualizar Alumno" //cambia el texto del botón a guardar
   document.querySelector("#nombre").focus()//Hace que el cursor empiece a parpadear automáticamente dentro del campo "Nombre", listo para que el usuario escriba directamente sin tener que hacer clic con el mouse.
}
//


//Cancelar edición
function cancelarEdicion (){//limpia la pantalla y vuelve el formulario a modo crear
   formulario.reset() //vacia los input
   alumnosEditandoId = null//Borra el ID guardado en memoria
   alumnoEditar = null//borra la copia del objeto creada para comparar
   btnGuardar.textContent = "Guardar Alumno"
   btnCancelar.style.display = "none" //oculta el botón cancelar
   document.querySelector("#nombre").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion) //vuelve al sistema en modo "Alta"
//

// Carga inicial 
const alumnos = obtenerAlumnos(); //trae los alumnos al abrir la página
mostraAlumnos(alumnos) //dibuja la tabla por primera vez
