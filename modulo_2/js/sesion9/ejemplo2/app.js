const ps = document.body.getElementsByTagName('p');
console.log(ps[0])
console.log(ps[1])
console.log(ps[2])


document.body.insertBefore(ps[2], ps[0])
// ps[1].remove();


const h1 = document.createElement('h1');
console.log(h1)

const texto = document.createTextNode("Hola mundo")

h1.appendChild(texto)
console.log(h1)


document.body.appendChild(h1);
document.body.insertBefore(h1, document.body.firstElementChild)


const h2  = document.createElement('h2');
const texto2 = document.createTextNode("HOLA QUE TAL");
h2.appendChild(texto2);
document.body.insertBefore(h2, document.body.getElementsByTagName('p')[0]);

h2.className = "miclasesista"


