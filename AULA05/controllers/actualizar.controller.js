import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  try {
    // Aqui se llama asincronamente al servicio para obtener el cliente
    // y la respuesta se guarda en la variable perfil
    const perfil = await clientServices.detalleCliente(id);
    // console.log(perfil);
    // Hacemos una validacion para ver si el cliente existe
    if (perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      // Activamos un error
      throw new Error("El cliente no existe");
    }
    
  } catch (error) {
    // console.log('Catch Erorr -', error);
    // alert('Hubo un error al obtener el cliente');
    window.location.href = "../screens/error.html";
  }




  
  
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "../screens/edicion_concluida.html";
  });
});
