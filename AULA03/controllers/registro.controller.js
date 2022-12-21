// Tengo que importar el modulo para poder usar la funcion
import { clientServices } from "../service/client-service.js";


const formulario = document.querySelector("[data-form]");

// Recibe 2 parametros: 
// 1. El evento que se va a escuchar 
// 2. La funcion que se va a ejecutar cuando se dispare el evento
// Nosotroa aqui recibimos el evento
// Dentro del evento tenemos una propiedad que se llama preventDefault
formulario.addEventListener('submit', (evento) => {
  // console.log('formulario')
  // No queremos que este formulario funcione como lo hace por defecto
  evento.preventDefault();
  // Tenemos que obtener los datos del formulario
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log(nombre, email);
  // Ahora que ya tenemos la informacion del formulario, tenemos que enviarla al servidor y eso se lo delegamos a un servicio o funcion querreciba esos datos y los envie al servidor.
  clientServices
    .crearCliente(nombre, email)
    .then(() => {
      // console.log(respuesta);
      // Aqui le decimos cual es el archivo que queremos que se abra
      window.location.href = "../screens/registro_completado.html";
  }).catch((error) => {
    // console.log(error);
  });
});