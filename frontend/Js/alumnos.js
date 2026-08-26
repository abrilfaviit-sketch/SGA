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

const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")
let alumnosEditandoId = null
let alumnoEditar = null
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.computedStyleMap.display = "none"
const btnGuardar = document.querySelector("#btnGuardar")


formulario.addEventListener("submit", function (event) {
   event.preventDefault();

   const nombre = document.querySelector("#nombre").value.trim()
   const carrera = document.querySelector("#carrera").value.trim()
   const correo = document.querySelector("#correo").value.trim()

   if(nombre === "" ||  carrera === "" || correo === "") {
      mostrarMensaje("Todos los campos son obligatorios", "mje-error")
      return 
   }

   if (!correo.includes ("@")){
      mostrarMensaje("Ingrese un correo electronico válido", "mje-error")
      return
   }

   if(nombre.length < 3 ) {
      mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
      return
   }

   const alumnos = obtenerAlumnos()
   //console.log(nombre, carrera, correo) //para ver la info q' contiene

   if (alumnosEditandoId === null){
   //creación de los objetos
   const alumno = {
      id: Date.now(),
      nombre: nombre,
      carrera: carrera,
      correo: correo
   }
   alumnos.push(alumno)
   mostrarMensaje("Alumno guardado correctamente", "mje-exito")

}else{
   const alumno = alumnos.find(alumno => alumno.id === alumnosEditandoId)
   alumno.nombre = nombre
   alumno.carrera = carrera
   alumno.correo = correo

   const datosActuales = {
      nombre: nombre,
      carrera: carrera,
      correo: correo
   }
   // if(datosActuales.nombre === alumnosEditar.nombre &&      //opción 1
   //    datosActuales.carrera === alumnosEditar.carrera &&
   //     datosActuales.correo === alumnosEditar.correo){
   //    mostrarMensaje ("No se realizaron cambios", "mje-error")
   //    return
   //     }
   if (JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){    //opción 2
      mostrarMensaje ("No se realizaron cambios", "mje-adv")
      return
   }

   alumnosEditandoId = null
   alumnoEditar = null
   btnGuardar.textContent = "Guardar Alumno"

   mostrarMensaje("Alumno actualizado correctamente")
}

   //localStorage.setItem("alumnos", JSON.stringify(alumnos))
   guardarDatos("alumnos", alumnos)

   mostraAlumnos(alumnos)
   formulario.reset()
});


function obtenerAlumnos() {
  return obtenerDatos("alumnos")
}




function mostraAlumnos(alumnos) {
   listaAlumnos.innerHTML = ""
   for (const alumno of alumnos) {
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
      `;
   } //lineas 210 y 211 se vinculo los botones con los id de los alumnos
}

function eliminarAlumno(id) {
   const alumnos = obtenerAlumnos()
   const alumnosActualizados = alumnos.filter(
      alumno => alumno.id !== id);

   localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
   mostraAlumnos(alumnosActualizados)

   mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}

listaAlumnos.addEventListener("click", (e) => {
   if (e.target.classList.contains("btn-eliminar")) {
      const id = Number(e.target.dataset.id)
      eliminarAlumno(id)
   }
   if (e.target.classList.contains("btn-editar")){
      const id = Number(e.target.dataset.id)
      editarAlumno(id)
   }
})

function editarAlumno(id) {
   const alumnos = obtenerAlumnos()
   const alumno = alumnos.find(alumno => alumno.id === id)
   document.querySelector("#nombre").value = alumno.nombre;
   document.querySelector("#carrera").value = alumno.carrera;
   document.querySelector("#correo").value = alumno.correo;

   alumnoEditar = {
      nombre: alumno.nombre,
      carrera: alumno,carrera,
      correo: alumno.correo
   }

   alumnosEditandoId = id;
   btnCancelar.style.display = "inline-block"
   btnGuardar.textContent = "Actualizar Alumno"
   document.querySelector("#nombre").focus()
}



//en edutech hay q hacer el alta y baja de preceptores ajja
function cancelarEdicion (){
   formulario.reset()
   alumnosEditandoId = null
   alumnoEditar = null
   btnGuardar.textContent = "Guardar Alumno"
   btnCancelar.style.display = "none"
   document.querySelector("#nombre").focus()
}

btnCancelar.addEventListener("clic", cancelarEdicion)


const alumnos = obtenerAlumnos();
mostraAlumnos(alumnos)
