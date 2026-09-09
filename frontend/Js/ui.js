function mostrarMensaje(texto, clase) {
    const mensaje = document.querySelector("#mensaje")//captura el elemento mensaje
   mensaje.textContent = texto;//le asigna texto recibido
   mensaje.className = `mensaje ${clase}`//le cambia las clases css usando literal templates para mantener la clase base mensaje más la clase dinámica como mje'exito o error
   mensaje.style.display = "block" //lo hace visible con display = "block"
   setTimeout(() => { 
      mensaje.style.display = "none"//lo vuelve a ocultar automaticamente despues de 3 segundos
   }, 3000);//a los 3 segundos
}