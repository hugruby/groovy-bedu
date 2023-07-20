function calculaEdad(birthDay){
  const age = 2023 - birthDay;
  return age;
}


console.log(calculaEdad(1983));



function yearsUntilRetirement(year, name){
    const edad = calculaEdad(year);
    const retirement = 65 - edad;
    console.log (`${name } se retirara en ${retirement} años`)
}

yearsUntilRetirement(1983, "Hugo")

const factorial = function fact (resultado){
     resultado = resultado < 2 ? 1 : (resultado * fact(resultado - 1));
    return resultado;
}

const resultado = factorial(5)
console.log(resultado)








//RETO 1 sesion 4
function power(base, exponent) {
    let resultado = 1;
    for (let i = 1; i<=exponent;i++){
        resultado = resultado * base;
    }
    return resultado;
}

const resPotencia =  power(3,3);
console.log(resPotencia);



const aQueTeDedicas = function(job,name){
    switch(job){
        case "desarrollador":
            return `${name} desarrolla aplicaciones web`
        case "diseñador":
            return `${name} diseña paginas web`
        default:
            return `${name} hace otra cosa`
    }
}

console.log(aQueTeDedicas);
console.log(aQueTeDedicas("desarrollador", "Hugo"));


// RETO 2 sesion 4
function getLergerInt(number1, number2) {
    let resultado = 0;
    if (number1>number2) resultado = number1;
        else if (number1<number2) resultado = number2;
            else resultado = "Numeros iguales";
    return resultado;
}

const largerNums =  getLergerInt(3,4);
console.log(largerNums);

console.log("________________________");

console.log(
    (function(num1,num2){
    const resul = (num1>num2)?num1:num2;
    return resul;
})(12,15)
)
console.log("________________________");


const largeArrow = (a,b) => (a>b)?a:b;

console.log(largeArrow(50,20));



//Inmediately Ivoked Function Expression

(function(lastName){
    const name = `Hugo ${lastName}`;
    console.log(name);
})("Munguiaaaa")


//Arrow functions

const suma = (a,b) => {
    return (a+b);
}
const suma2 = (a,b) => (a+b)

console.log(suma(12,4))

const nombres = ["john","mark","Elliot"]

const getFullNames = (nombres) => {
    const fullNames = [];
    for(const name of nombres){
        fullNames.push(`${name} Doe`)
    }
    return fullNames;
}

console.log(getFullNames(nombres))

//RETO 3 sesion 4
function fibonacci2(limit) {
    if ( limit === 0 || limit ===1) {
        limit =  1;
    }else{
        limit = fibonacci(limit-1) + fibonacci(limit-2);
    }
    return limit;
}

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function recursivaFibo(limite){
    for (let i = 1; i <= limite; i++){
        console.log(fibonacci(i))
    }
}

const fibo =  recursivaFibo(8);
console.log(fibo);
