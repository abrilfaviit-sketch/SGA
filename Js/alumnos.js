const alumnos = [
    {
        id: 1,
        nombre: "Juan"
    },
    {
        id:2,
        nombre: "Abril"
    }
];
function obtenerAlumnos(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(alumnos)
        }, 2000)
    })
}

async function iniciar(){
    const datos = await obtenerAlumnos()
    console.table(datos)
}
iniciar()

//crear obtener materias()
//crear obtener docentes
//mostrar los datos a traves de async await

const materias = [
    {
        nombre: "Literatura",
        horarios: "Lunes y Miercoles 10:00 a 12:00"
    },
    {
        nombre: "Fisica",
        horarios: "Martes y Jueves 14:00 a 16:00"
    }
];

function obtenerMaterias(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(materias)
        }, 2000)
    })
}

async function mostrarMaterias(){
    const materias = await obtenerMaterias()
        console.table(materias)
    
}
mostrarMaterias()

const docentes = [
    {
        nombre: "Juan",
        apellido: "Perez"
    },
    {
        nombre: "Ana",
        apellido: "Gomez"
    }
];

function obtenerDocentes(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(docentes)
        }, 2000)
    })
}

async function mostrarDocentes(){
    const docentes = await obtenerDocentes()
        console.table(docentes)
    
}
mostrarDocentes()