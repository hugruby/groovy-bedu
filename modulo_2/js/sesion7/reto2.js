//RETO 2 sesion 7
/*Crear una función compact que recibe un arreglo y retorna un nuevo arreglo 
sin incluir los valores que sean falsy.*/

function compact(array) {
    const arrayFil = array.filter((acc) => acc)
    return arrayFil;
}
  
//   function compact(array) {
//       return array.filter(function(element) {
//         return !!element;
//       });
//   }
  
  const arrayY = [0, 1, false, 2, '', 3];
  const compactedArray = compact(arrayY);
  
  console.log(compactedArray); // [1, 2, 3]