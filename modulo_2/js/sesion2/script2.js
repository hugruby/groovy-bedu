const time = 19;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time <= 24) {
  greeting = "Good evening";
}else if (time > 24){
    greeting = "Hora invalida";
}

console.log(greeting) // Good afternoon

// admin.permiso && <miModuloChingon>

title = title ?? title.miTitulo;

//RETO 2
//  for (let i = 0; i <= 100; i++){
//     if(i%2 === 0 ){
//         console.log(i);
//     }
    
// }

//RETO 3
for (let contador = 2; contador <= 100; contador++){
    let esPrimo = true;
    //Mejora  Math.sqrt(contador);
    for (let i = 2; i < contador; i++){
        //que el contador no sea dos, que el modulo de cojt
        if( contador % i === 0 ){
            esPrimo = false;
            break;
        }        
    }
    if (esPrimo){
        console.log(contador);
    } 
}


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


let result = 1;
let counter = 0;
while (counter < 10) {
  console.log(counter+"  "+result);
  result = result * 2;
  counter = counter + 1;
}
console.log(result);


console.log(Boolean(NaN));        // Falsy
console.log(Boolean('0'));        // truthy
console.log(Boolean('null'));     // truthy
console.log(Boolean(false));      //  falsy
console.log(Boolean(Infinity));    // truthy

