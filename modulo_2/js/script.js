// console.log(null == undefined);
// // → true
// console.log(null == 0);
// // → false

// console.log(null == null);

// console.log(undefined == null);


// Numbers
console.log(typeof 10); //"number"
console.log(typeof 12.5); // "number"
console.log(typeof 2.5e+6); // "number"
console.log(typeof Infinity);  // "number"
console.log(typeof NaN); //"number"

// Strings
console.log(typeof ' '); // "string" - Espacios en blanco cuentan como caracteres
console.log(typeof 'Hello World'); // "string"
console.log(typeof '12');  // "string" - Números dentro de comillas son strings

// Booleans
console.log(typeof true);  // "boolean"
console.log(typeof false); // "boolean"

// Undefined
console.log(typeof undefined); // "undefined"

var name;
console.log(typeof name);  // "undefined" - Aún no se asigna un valor

// Null
console.log(typeof null);  // "object"

var a = 5;
var b = 10;
var c = 15;

console.log(a + b);  // 15

console.log(b - a);  // 5

console.log(a * c);  // 75

console.log(c / a);  // 3

console.log(b % a);  // 0


var a = 5;
var b = 10;
var c = 15;

c++;  // 16

b--;  // 9

console.log(c);
console.log(b);

console.log("___________________");

var a = 5;
var b = 10;
var c = 15;

console.log(a + b * c);  // 155

console.log((a + b) * c);  // 225

console.log(b / a * c);  // 30

console.log(b / (a * c));  // 0.1333

console.log(a - b + c);  // 10

console.log(a - (b + c));  // -20



console.log("_________________________________________________________");

var a = 5;
var b = 10;
var c = 15;

console.log((3 + b) * c / a * 2);     //78

console.log(((a + b * c) / 5) * 2);  //62

console.log(b / a + 2 * c);  //32

console.log((a + b + c / c) * a); //80

console.log(((3 * a) / c) + a + b + c ); //31

console.log(a - (b + c) * a / 1); //-120


console.log(7 / 0); // Infinity
console.log(-7 / 0);  // -Infinity


var aasda = "Hola que tal";
var b = 'Hello World';

console.log(`dasd ${1+4}`);	// undefined
console.log(b);	// Hello World


// for(var i = 0; i <= 50; i++) {
//     if(i%2 == 0){
//         console.log( i );
//     }
// }


for (let counter = 2; counter <= 100; counter++) {
    let isPrime = true;
  
    for (let i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) console.log(counter)
}

