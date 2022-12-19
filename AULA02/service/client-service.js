//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE


// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfiles");

//     http.send();

//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if (http.status >= 400) {
//         reject(response);
//       } else {
//         resolve(response);
//       }
//     };
//   });
//   return promise;
// };

// Fetch API
// const listaClientes = () => {
//   return fetch("http://localhost:3000/perfil")
//     .then((respuesta) => {
//       return respuesta.json();
//     });
// };

// Otra forma de hacerlo
// const listaClientes = () => {
//   return fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
// };

// Otra forma de hacerlo
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());



// console.log(data);
//

export const clientServices = {
  listaClientes,
};