import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');


const obtenerInformacion = () => {
  // Tengo que obtener la url donde estamos actualmente
  const url = new URL(window.location);
  // Nombre del parametro que busco
  // console.log(url.searchParams.get('id'));
  const id = url.searchParams.get("id");

  if(id === null) {
    window.location.href = '../screens/error.html';
  }


  const nombre = document.querySelector('[data-nombre]');
  const email = document.querySelector('[data-email]');

  // console.log(nombre, email)

  // Obtengo el perfil del cliente
  clientServices.detalleCliente(id).then((perfil) => {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
  })
};

obtenerInformacion();

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const nombre = document.querySelector('[data-nombre]').value;
  const email = document.querySelector('[data-email]').value;
  // console.log(nombre, email);
  clientServices.actualizarCliente(id, nombre, email)
  .then(() => {
    window.location.href = '../screens/edicion_concluida.html';
  })
});
