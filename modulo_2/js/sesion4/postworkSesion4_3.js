/*Escribir una función frequency que recibe un string como argumento. Esta función debe contar 
la frecuencia o el número de veces que se repite cada carácter.

El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean 
la frecuencia. Los resultados deben ordenarse de manera ascendente por los caracteres y no la frecuencia.
*/

const letter = function(name, value){
    this.name = name
    this.value = value
}

function frequency(string) {
    const letras = {}

    for(let letter of string){
        letras[letter] = (letras[letter] ?? 0) + 1
    }
     // Ordenamos las claves del objeto alfabéticamente.
    const sortedKeys = Object.keys(letras).sort();

    // Creamos un nuevo objeto donde las claves están ordenadas y asignamos las frecuencias.
    const resultado = {};
    for (let key of sortedKeys) {
        resultado[key] = letras[key];
    }

    return resultado;
}



   
console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}