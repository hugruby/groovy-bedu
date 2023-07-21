const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
  }
  
//   function addColor(car) {
//     car.color = 'Black'
//     return car
//   }

  function addColor(car) {
    const newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }
  
  console.log('Before calling addColor()', car)
  
  const sameCar = addColor(car)
  
  console.log('After calling addColor()', car)
  console.log('After calling addColor()', sameCar)
  console.log('Same car?', car === sameCar) // true



  const points = [40, 100, 1, 5, 25, 10];
  
  points.sort(function(a,b){
    return b-a
  });

  console.log(points)