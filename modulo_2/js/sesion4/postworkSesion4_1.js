/*Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor
 o si son objetos con las mismas propiedades en este último caso los valores de las propiedades deben ser 
 comparados con una llamada recursiva de deepEqual.*/
function deepEqual(a, b) {
    // console.log(a)
    // console.log(b)
    if (typeof a === 'object' && typeof b === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length){
            return false;
        }

        for(let key of keysA){
            if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
                return false;
            }
        }
        return true;
    }else {
      return a === b;
    }
}
   
const john = {
firstName: 'John',
lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
console.log('Test 6:', deepEqual(john, { firstName: 'John', lastName: 'Moe' })) // false