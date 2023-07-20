const colors = ['Red', 'Blue', 'Green']

console.log(colors)  // ['Red', 'Blue', 'Green']

console.log(colors.length)  // 3


const arreglo  = [50,60,70,80,90];

console.log(arreglo);

let suma = 0;
for (let i = 0; i < arreglo.length; i++){
   suma += arreglo[i];
}

console.log(suma);

const resultado = (suma/(arreglo.length));

console.log(resultado);


const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
const obj = {}

// for(const keyValue of car) {
//   obj[keyValue[0]] = keyValue[1]
// }

for (const keys of car){
    obj[keys[0]] = keys[1];
}

console.log(obj)
