//Reto 1

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
  function pluck(list, propertyName) {
    const arreglo = [];
    for(let nombre of list){
        arreglo.push(nombre[propertyName]);
    }   
    return arreglo
  }
  
  
console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]





  //Reto 2
  
  function createPhoneNumber(arreglo){
    let cadenaNum = "";
    let aux1 = "", aux2 = "", aux3 = "";
    for (let i=0; i<arreglo.length;i++){
        if(i<3){
            aux1 += arreglo[i];
        }else if (i>=3 && i<=5){
            aux2 += arreglo[i];
        }else if (i>5){
            aux3 += arreglo[i];
        }
    }
    console.log("(" + aux1 +") "+aux2+"-"+aux3);
  }

  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"


  //Reto 3


  function findMissingNumbers(arreglo){
    const missing = [];
    const max = Math.max(... arreglo);
    const min = Math.min(... arreglo);
    // arreglo.sort(function(a, b) {
    //     return a - b;
    //   });
    console.log(arreglo)
    console.log(max);
    console.log(min);
    for (let i=min; i<=max;i++){
        console.log("____"+ arreglo[i]);
        if (!arreglo.includes(i)) {
            missing.push(i);
        }
        console.log(missing)     
    }
    return (missing);
  }

  console.log(findMissingNumbers([9, 5, 7, 10])); // [4, 6, 8]
