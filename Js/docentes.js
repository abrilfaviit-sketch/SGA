//Hacer el js como el de alumnos.js
const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
const listaDocentes = document.querySelector("#listaDocentes")
let docentesEditandoId = null
let docenteEditar = null



formulario.addEventListener("submit", function (event) {
   event.preventDefault();

   const nombre = document.querySelector("#nombre").value.trim()
   const materia = document.querySelector("#materia").value.trim()
   const correo = document.querySelector("#correo").value.trim()

   if(nombre === "" || materia === "" || correo === "") {
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

   const docentes = obtenerDocentes()
   //console.log(nombre, materia, correo) //para ver la info q' contiene

   if (docentesEditandoId === null){
   //creación de los objetos
   const docente = {
      id: Date.now(),
      nombre: nombre,
      materia: materia,
      correo: correo
   }
   docentes.push(docente)
   mostrarMensaje("Docente guardado correctamente", "mje-exito")

}else{
   const docente = docentes.find(docente => docente.id === docentesEditandoId)
   docente.nombre = nombre
   docente.materia = materia
   docente.correo = correo

   const datosActuales = {
      nombre: nombre,
      materia: materia,
      correo: correo
   }
   // if(datosActuales.nombre === docentesEditar.nombre &&      //opción 1
   //    datosActuales.materia === docentesEditar.materia &&
   //     datosActuales.correo === docentesEditar.correo){
   //    mostrarMensaje ("No se realizaron cambios", "mje-error")
   //    return
   //     }
   if (JSON.stringify(datosActuales) === JSON.stringify(docenteEditar)){    //opción 2
      mostrarMensaje ("No se realizaron cambios", "mje-error")
      return
   }

   docentesEditandoId = null
   docenteEditar = null
   formulario.querySelector("button").textContent = "Guardar Docente"

   mostrarMensaje("Docente actualizado correctamente")
}

   //localStorage.setItem("docentes", JSON.stringify(docentes))
   guardarDatos("docentes", docentes)

   mostraDocentes(docentes)
   formulario.reset()
});


function obtenerDocentes() {
  return obtenerDatos("docentes")
}




function mostraDocentes(docentes) {
   listaDocentes.innerHTML = ""
   for (const docente of docentes) {
      listaDocentes.innerHTML += `
      <tr>
         <td>${docente.id}</td>
         <td>${docente.nombre}</td>
         <td>${docente.materia}</td>
         <td>${docente.correo}</td>
         <td>
            <button class="btn-editar" data-id="${docente.id}">Editar</button>  
            <button class="btn-eliminar" data-id="${docente.id}">Eliminar</button>
            </td>
      </tr>
      `;
   } //lineas 210 y 211 se vinculo los botones con los id de los docentes
}

function eliminarDocente(id) {
   const docentes = obtenerDocentes()
   const docentesActualizados = docentes.filter(
      docente => docente.id !== id
   );
   localStorage.setItem("docentes", JSON.stringify(docentesActualizados))
   mostraDocentes(docentesActualizados)
   mostrarMensaje("Docente eliminado correctamente", "mje-exito")
}

listaDocentes.addEventListener("click", (e) => {
   if (e.target.classList.contains("btn-eliminar")) {
      const id = Number(e.target.dataset.id)
      eliminarDocente(id)
   }
   if (e.target.classList.contains("btn-editar")){
      const id = Number(e.target.dataset.id)
      editarDocente(id)
   }
})

function editarDocente(id) {
   const docentes = obtenerDocentes()
   const docente = docentes.find(docente => docente.id === id)
   document.querySelector("#nombre").value = docente.nombre;
   document.querySelector("#materia").value = docente.materia;
   document.querySelector("#correo").value = docente.correo;

   docenteEditar = {
      nombre: docente.nombre,
      materia: docente.materia,
      correo: docente.correo
   }

   docentesEditandoId = id;
   formulario.querySelector("button").textContent = "Actualizar Docente"
}

const docentes = obtenerDocentes();
mostraDocentes(docentes)