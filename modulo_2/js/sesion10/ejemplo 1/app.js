const titulo = document.getElementById("title");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const black = document.getElementById("black");

red.addEventListener(
    "click",
    () =>{
        titulo.style = "color:red";
        titulo.textContent = "rojo";
    }
)

blue.addEventListener(
    "click",
    () =>{
        titulo.style = "color:blue";
        titulo.textContent = "azul";
    }
)

black.addEventListener(
    "click",
    () =>{
        titulo.style = "color:black";
        titulo.textContent = "negro";
    }
)

const boton = document.getElementById("boton");

boton.addEventListener("mousedown", (event) =>{
    if(event.button == 0){
        console.log("Boton izquierdo")
    }else if(event.button==1){
        console.log("Boton central")
    }else if(event.button==2){
        console.log("Boton derecho")
    }
})