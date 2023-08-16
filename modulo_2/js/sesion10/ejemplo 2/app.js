const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");


texto.addEventListener(
    "input",
    (event)=>{
        console.log(event.target.value)
        titulo.textContent = event.target.value
    }
)