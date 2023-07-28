const data = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let divMountains = document.getElementById("mountains");
createTable(divMountains)


function createTable(div){
    const tabla = document.createElement("table");
    tabla.classList.add("table-styled");
    div.appendChild(tabla)
    const thead = document.createElement("thead");
    tabla.appendChild(thead)
    createTrsTds(thead,"Name", "Height", "Place")
    agregarCampos(tabla);
    return div;
}

function agregarCampos(tabla){
    const tbody = document.createElement("tbody");
    tabla.appendChild(tbody)
    for (let element of data) {
        createTrsTds(tbody, element.name, element.height, element.place)
    }
}

function createTrsTds(node, ...fields){
    const tr = document.createElement("tr");
    node.appendChild(tr);

    for(let element of fields){
        let th = createNode("td", element);
        tr.appendChild(th);
    }
}

function createNode(type, child){
    const node = document.createElement(type);
    const text = document.createTextNode(child);
    node.appendChild(text);
    return node;
}
