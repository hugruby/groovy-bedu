const express = require("express");
const app = express();

const db = [
	{
		id: 1,
		name: "Gansito",
		price: 20,
	},
	{
		id: 2,
		name: "Coca Cola 600ml Sin Azúcar",
		price: 16,
	},
	{
		id: 3,
		name: "Sabritas 20g",
		price: 15,
	},
];

//Obtener todos los productos
app.get("/getproducts",function(request, response){
    //Envia toda la lista como recurso al cliente
    //json() convierte los objetos de js a json
    response.json(db);
});
//UN API tiene 4 maneras de recibir parametros
//1. A traves de un pedazo de la url
//2. A traves de un query string de la url
//3. A traves de los encabezados
//4. A traves del body de la peticion
//obtener un producto con un ID especifico
// En express se utilizan los : para deefinir una variable
app.get("/getProduct/:id", function (request, response) {
	// Recuperando la variable ":id" de la URL
	// como una cadena de texto
	const { id } = request.params;
	const product = db.find((x) => x.id.toString() === id);
	response.json(product);
});

app.listen(8080, function () {
	console.log("> Escuchando puerto 8080");
});