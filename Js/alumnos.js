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

const formulario = document.querySelector("#formAlumno")
const mensaje = document.querySelector("#mensaje")
let alumnosEditandoId = null


formulario.addEventListener("submit", function (event){
   event.preventDefault();

const nombre = document.querySelector("#nombre").value
const carrera = document.querySelector("#carrera").value
const correo = document.querySelector("#correo").value
const listaAlumnos = document.querySelector("#listaAlumnos")
console.log(nombre, carrera, correo) //para ver la info q' contiene

//creación de los objetos
const alumno = {
   id: Date.now(),
   nombre: nombre,
   carrera: carrera,
   correo: correo
}
   const alumnos = obtenerAlumnos()
   alumnos.push(alumno)

   localStorage.setItem("alumnos", JSON.stringify(alumnos))

   mostrarMensaje("Alumno guardado correctamente")

   mostraAlumnos(alumnos)

   formulario.reset()
});


function obtenerAlumnos (){
   const datos = localStorage.getItem("alumnos")
   if (datos) {
      return JSON.parse(datos) 
   }
   return [] //evita q devuelva null
}

function mostrarMensaje(texto){
   mensaje.textContent = texto;
   setTimeout(() => {
      mensaje.textContent= " ";
   }, 3000);
}


function mostraAlumnos (alumnos){
   listaAlumnos.innerHTML = "" 
   for (const alumno of alumnos){
      listaAlumnos.innerHTML += `
      <tr>
         <td>${alumno.id}</td>
         <td>${alumno.nombre}</td>
         <td>${alumno.carrera}</td>
         <td>${alumno.correo}</td>
         <td>
            <button class="btn-editar" data-id="${alumno.id}"> Editar </button>  
            <button class="btn-eliminar" data-id="${alumno.id}"> Eliminar </button>
            </td>
      </tr>
      `;
   } //lineas 210 y 211 se vinculo los botones con los id de los alumnos
}

function eliminarAlumno(id){
   const alumnos = obtenerAlumnos()
   const alumnosActualizados = alumnos.filter(
      alumno => alumno.id !== id
   );
   localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
   mostrarAlumnos(alumnosActualizados)
   mostrarMensaje("Alumno eliminado correctamente")
}

listaAlumnos.addEventListener("click", (e) =>{
   if (e.target.classList.contains("btn-eliminar")) {
      const id = Number(e.target.dataset.id)
      eliminarAlumno(id)
   }
})

function editarAlumno(id){
   const alumnos = obtenerAlumnos()
   const alumno = alumnos.find (alumno => alumno.id === id)
   document.querySelector("#nombre").value = alumno.nombre;
   document.querySelector("#carrera").value = alumno.carrera;
   document.querySelector("#correo").value = alumno.correo;
   alumnosEditandoId = id;
}

//detectar el boton editar

