# Alura-CRUD-con-JavaScript-asincrono

## Articulo: ¡Organiza tu código Javascript de una manera fácil

<https://www.aluracursos.com/blog/organiza-tu-codigo-javascript-de-una-manera-facil>

## Articulo: Herencia en JavaScript  

<https://www.aluracursos.com/blog/herencia-en-javascript>

## Articulo: Capturando valor del input: introducción a los selectores  

<https://www.aluracursos.com/blog/capturando-valor-del-input-introduccion-a-los-selectores>

## Video: ¿Cuál es la diferencia entre Front End y Back End?  

<https://www.youtube.com/watch?v=R9uaBxgCkyA&t=151s>

## Articulo: Cómo convertirse en desarrollador full-stack el próximo año  

<https://www.aluracursos.com/blog/como-convertirse-en-desarrollador-full-stack-el-proximo-ano>

## Preparando el ambiente

Para este curso es necesario tener nodejs instalado en tu computadora.

Antes de empezar, necesitamos preparar el ambiente y descargar Nodejs en su página oficial <https://nodejs.org/en/>.

En el caso de que ya lo tengas, puedes saltar esta etapa.

Vamos a darle click en “download” y tenemos dos opciones: “current” que presenta nuevas features y otros elementos en prueba, y “LTS” que es la última versión estable de Node. Utilizaremos LTS y elegiremos Windows o Mac, depende de tu sistema operativo.

Al finalizar la descarga ejecutamos el archivo. La instalación es muy simple, solamente tenemos que aceptar los términos de licencia y seleccionar la carpeta de almacenamiento.

Caso utilices Linux puedes seguir los siguientes pasos:

```terminal
sudo apt update
sudo apt install node
```

Luego después de la instalación en tu sistema operativo, necesitarás abrir la terminal y escribir:

```terminal
node -v
```

Si salió todo bien te aparecerá la versión de node que instalaste.

Podemos proseguir.

En la clase siguiente vamos a usar el json-server para simular un servidor y consumir los datos.

Json-server está listado como dependiente del package.json, que es el archivo donde encontramos todas las bibliotecas externas que estamos usando en nuestro proyecto. Al hacer npm install dentro de la carpeta admin, que es la carpeta del proyecto (veremos esta parte en el video) empieza la descarga de json-server automáticamente.

El comando json-server --watch db.json que usamos en la clase necesita ser ejecutado dentro de la carpeta del proyecto de admin, caso contrario este comando no será reconocido.

Otra información importante es que para funcionar localmente, al invés de ejecutar el comando json-server --watch db.json, como lo hacemos en clase, tenemos que ejecutar este comando con npx adelante:

npx json-server --watch db.json

En el caso de que quieras utilizar el comando sin el npx adelante es necesario instalar json-server de manera global:

```terminal
npm install -g json-server
```

Después, para subir el servidor, ejecutamos json-server --watch db.json, como lo hacemos en clase.

<https://www.npmjs.com/package/json-server>

## Articulo: Empezando con fetch en Javascript  

<https://www.aluracursos.com/blog/empezando-con-fetch-en-javascript?utm_source=gnarus&utm_medium=timeline>

## Link externo

<http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D>  

## Articulo: HTTP: Diferencias entre GET y POST

<https://www.aluracursos.com/blog/diferencias-entre-get-y-post>


