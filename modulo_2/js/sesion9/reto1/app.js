
const images = document.getElementsByTagName('img')
const arreglitoP = []
console.log(images)

for (let i = images.length - 1; i >= 0; i--) {
    arreglitoP.push(images[i].alt);
    images[i].remove();
}

console.log(arreglitoP)
crearPs(arreglitoP);

function crearPs(arregloPs){
    for (let i = arregloPs.length - 1; i >= 0; i--) {
        // console.log(arregloPs[i])
        const nodoElemento = createNode("p", arregloPs[i]);
        document.body.insertBefore(nodoElemento, document.body.lastElementChild)
    }
}

function createNode(type, child){
    const node = document.createElement(type);
    const text = document.createTextNode(child);
    node.appendChild(text);
    return node;
}