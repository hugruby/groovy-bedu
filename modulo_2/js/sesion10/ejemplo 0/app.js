// window.addEventListener("click", function(){
//     console.log("OUCH");
// })


const boton = document.getElementById("but");
// const boton2 = document.querySelector("button");
boton.addEventListener(
    "click", 
    () => {
        console.log("se dio click al boton")
    })

const boton2 = document.getElementById("but2");

function once(){
    console.log("Le dimos click al otro boton");
    boton2.removeEventListener("click", once);
}

boton2.addEventListener("click", once);