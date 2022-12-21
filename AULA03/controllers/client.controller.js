import { clientServices } from "../service/client-service.js";

// console.log(clientServices);

//backticks
const crearNuevaLinea = (nombre, email, id) => {
  // console.log(id);
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id='${id}'>
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  // Obtengo el id del cliente a eliminar cuando se hace click en el boton
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    // console.log("El clik", id);
    clientServices
      .eliminarCliente(id)
      .then( respuesta => {
      console.log(respuesta);
    }).catch( error => {
      alert(error);
    })
  });
  // console.log(btn);
  return linea;
};

const table = document.querySelector("[data-table]");

// clientServices
//   .listaClientes()
//   .then((data) => {
//     data.forEach((perfil) => {
//       console.log(perfil);
//       const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
//       table.appendChild(nuevaLinea);
//     });
//   })
//   .catch((error) => alert("Ocurrió un error"));

// Una manera mas elegante de hacer lo mismo
clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

// Necesitamos una funcion que nos permita eliminar un cliente
// const eliminarCliente = (id) => {
//   console.log(id);
  // clientServices
  //   .eliminarCliente(id)
  //   .then(() => {
  //     alert("Cliente eliminado");
  //     location.reload();
  //   })
  //   .catch((error) => alert("Ocurrió un error"));
// }
