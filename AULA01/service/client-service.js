// Voy a crear una funcion que recibe el nombre y el email
const crearNuevaLinea = (nombre, email) => {
  // Le digo que quiero crear un elemento tr
  const linea = document.createElement("tr");
  // Necesitamos combinar codigo html con javascipt
  // Eso lo logramos con las bacticks
  // Necesito tener la info de manera dinámica
  const contenido = `
  <td class="td" data-td>${nombre}</td>
  <td>${email}</td>
  <td>
    <ul class="table__button-control">
      <li>
        <a
          href="../screens/editar_cliente.html"
          class="simple-button simple-button--edit"
          >Editar</a
        >
      </li>
      <li>
        <button
          class="simple-button simple-button--delete"
          type="button"
        >
          Eliminar
        </button>
      </li>
    </ul>
  </td>
`;
  linea.innerHTML = contenido;
  return linea;
};

// Recorre todos los elementos del Dom y obtenemos el elemento que tiene el atributo data-table en el html
const table = document.querySelector("[data-table]");

// console.log('Client Service Started');

// Genero una nueva funcion listaClientes
const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {
    // Aqui tenemos un objeto XMLHttpRequest
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil", true);
    http.send();
    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;
};

// Aqui tenemos un objeto XMLHttpRequest
// const http = new XMLHttpRequest();
// console.log(http);

// Aplicamos la propiedad open al objeto http
// que recibe dos parametros, el primero es el metodo
// y el segundo es la url donde se va a realizar la peticion http
// CRUD - Metodos HTTP
// Create: POST
// Read: GET - Obtenemos datos
// Update: PUT
// Delete: DELETE
// http.open("GET", "http://localhost:3000/perfil", true);

// Luego tenemos que enviar la peticion
// Eso lo hacemos con el metodo send
// Desde el navegador estan saliendo los datos hacia el servidor
// que se encuentra en la url
// http.send();

// Todavia no tenemos respuesta del servidor
// Para obtener la respuesta del servidor
// tenemos que usar el metodo onload
// http.onload = () => {
// Aqui estamos recibiendo un texto plano
// const data = http.response;
// Ahora aqui lo transformamos a un objeto de tipo JSON
// const data = JSON.parse(http.response);
// console.log(data);

// Hacemos una nueva peticion
// para obtener los datos de hoy
// ¿ Como puedo hacer para que se ejecute despues de la peticion anterior, es decir, que se ejecute cuando termine la peticion anterior ?
// De una manera inteligente
// const http2 = new XMLHttpRequest();
// http2.open("GET", "http://localhost:3000/perfil/hoy", true);
// http2.send();
// http2.onload = () => {
//   const data2 = JSON.parse(http2.response);
//   console.log(data);
// };
// };

listaClientes().then((data) => {
  // console.log(data);
  // Los areglos tienen un metodo llamado forEach
  // recibimos un perfil y lo vamos a agregar a la tabla
  data.forEach((perfil) => {
  // console.log(perfil);
  // Aqui llamamos a la funcion que creamos
  // y le pasamos los parametros
  const nuevalinea = crearNuevaLinea(perfil.nombre, perfil.email);
  // console.log(linea);
  // Agregamos la linea a la tabla
  table.appendChild(nuevalinea);
  });
}).catch((error) => {
  alert('Error al obtener los datos');
  console.log(error);
});

// console.log(http);
