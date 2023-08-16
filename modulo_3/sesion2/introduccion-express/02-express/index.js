// 1. Importar express
const express = require("express");

// 2. Crear una instacia de un servidor
const app = express();

// 3. Declaración de rutas
// Un método/verbo de HTTP es una acción
// que puede realizar un backend.
// GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, TRACE, CONNECT...

// Para registrar una ruta:
// instancia.metodo('ruta', funcion)
// http://localhost:8080/
app.get("/", function (request, response) {
	// send() es write() y end() en una sola instrucción
	response.send("Hello World");
});
//${__dirname} es la ruta absoluta de donde se encuentra el archivo
app.get("/acercade", function(request, response){
    response.sendFile(`${__dirname}/servidor-viejo/about.html`)
});
//* ruta comodin lo que sea
app.get("*", function(request, response){
    response.sendFile(`${__dirname}/servidor-viejo/404.html`)
});

// 4. Escuchar un puerto
app.listen(8080, function () {
	console.log("> Escuchando puerto 8080");
});