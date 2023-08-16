/*core modules paquetes o modulos que vienen incluidos
en la instalacion de nodejs*/

/*se utiliza la funcion require para importar las funciones 
modulos a utilizar */
//CommonJs
const os = require("node:os");

//Extension mjs EcmaScript 6
// import os from "node:os";
console.log(os.platform());
