const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  // Tenemos que definir nuestro fetch
  // Le decimos la url a la que se va a conectar y despues
  // va a recibir como 2do parametro un objeto con las opciones
  // Aqui definimos las demas propiedades de la peticion
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre,
      email,
      // Generamos el id con la libreia uuid
      id: uuid.v4()
    })
  });
}

export const clientServices = {
  listaClientes,
  crearCliente,
};
