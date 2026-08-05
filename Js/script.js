// console.log("Inicio")
// setTimeout(() => {
// console.log("Buscando alumno...")
// }, 3000) //3seg espera de resp
// console.log("Fin")
// // -----------------

// function saludar() {
// console.log("Hola")
// }
// function ejecutar(funcion) {
// funcion();
// }
// ejecutar(saludar)//callback


// function despedirse() {
// console.log("Hasta luego")
// }
// setTimeout(despedirse, 3000)//callback
// //esperas
// setTimeout(() => {
// console.log("Buscando docentes")
// }, 2000);

// setTimeout(() => {
// console.log("Buscando materias")
// }, 4000);

// setTimeout(() => {
// console.log("Buscando cursos")
// }, 1000);

// console.log("Abriendo SGA")
// setTimeout(() => {
//     console.log("Alumnos cargados")
// }, 3000);

// console.log("Usuario puede seguir")

//en 5 seg de espera aparezca "Lista recibida" 
// Primero solicitando lista de alumnos
//segundo: el programa sigue ejecutandose

// console.log("Solicitando lista de alumnos")
// setTimeout(() => {
//     console.log("Lista recibida")
// }, 5000)
// console.log("El programa sigue ejecutandose...")

// function obtenerAlumnos() {
//     setTimeout(() => {
//         return ["Ana", "Juan", "Pedro"]
//     }, 3000)
// }

// obtenerAlumnos()

// function obtenerAlumnos (){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Ya tengo el arreglo")
//             resolve(["Ana", "Juan", "Pedro"])

//         }, 3000);
//     })
// }
// // } obtenerAlumnos().then((alumnos) => {
// //       console.log(alumnos)
// //  })

// async function iniciar(){
//     const alumnos = await obtenerAlumnos()
//     console.log(alumnos)
// }
// iniciar()

// login (usuario).then((usuario) => {
// return obtenerAlumnos(usuarios.id)
// })
// .then((cursos) => {
//     return obtenerAlumnos(cursos)
// })
// .then((notas) => {
//     console.log(notas)
// })
// .catch((error) => {
//     console.log(error)
// })

// async function mostrarNotas(){
//     try{
//     const usuario = await login(usuario)
//     const cursos = await obtenerCursos(usuario.id)
//     const notas = await obtenerNotas(cursos)
//     console.log(notas)
//     }catch(error){
//         console.log(error)
//     }
// }

//simular una consulta 
// function obtenerClima (){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("22° C - Soleado")
//         }, 2000)
//     })
// }

// //con then
// obtenerClima().then((clima) => {
//     console.log(clima)
// });

// //con async await
// async function mostrarClima(){
//     const clima = await obtenerClima()
//     console.log(clima)
// }

// mostrarClima()

// //saldo 
// function consultarSaldo(){
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(15000)
//         }, 2000)
//     })
// }

// async function mostrarSaldo(){
//     const saldo = await consultarSaldo()
//     console.log(`Su saldo es: $${saldo}`)
// }
// mostrarSaldo()


function inciarSesion(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Bienvenido, Abril")
        }, 2000)
    })
}

async function mostrarInicio(){
    const mensaje = await iniciarSesion()
    console.log(mensaje)
}
mostrarInicio()

function obtenerUsuarios(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nombre: "Abril",
                edad: 20
            })
        }, 3000)
    })
}
async function mostrarUsuarios(){
    console.log("Cargando usuarios...")
        const usuarios = await obtenerUsuarios()
        console.log(usuarios)
}
mostrarUsuarios()
