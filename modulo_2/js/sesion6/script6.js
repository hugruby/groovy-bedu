const Person = function(name, birthyear, job){
    this.name = name
    this.birthyear = birthyear
    this.job = job

    this.calculateAge = ()  =>  2023 - this.birthyear
}



const john  = new Person("John", 1990,"developer");
const jane  = new Person("Jane", 1995,"ux");

console.log(john);
console.log(jane.calculateAge());


//RETO 1 sesion 6
const Vector = function(x, y) {
    this.x = x
    this.y = y
    
    //Arrow function
    this.plus = (vec2) => new Vector((this.x+vec2.x),(this.y+vec2.y))
    //function w/return 
    this.minus = function (vec2) { 
        const vectorResultante = new Vector((this.x-vec2.x),(this.y-vec2.y))
        return vectorResultante
    }
    this.length = function (vec2) {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
  
const vec1 = new Vector(1, 2);
const vec2 = new Vector(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979


const Desarrollador = function(name, birthyear, job, skills){
Person.call(this, name, birthyear, job)
this.skills = skills;
this.programar = () => console.log("Estoy programando")
}

const Medico = function(name, birthyear, job, especialidad){
Person.call(this, name, birthyear, job)
this.especialidad = especialidad;
this.operar = () => console.log("Estoy operando")
}

const juan = new Desarrollador("Juan", 1985, "Desarrollador", "javascript")
const maria = new Medico("Maria", 1980, "Medico", "cirujano")

console.log(juan)
console.log(maria.calculateAge())


//Reto 2 sesion 6
console.log("+++++++++++++++++++ reto 2 ++++++++++++++++++++++");
const Group = function() {
    this.members = [];
}

Group.prototype.add = function(value){
    if(!this.has(value)){
        this.members.push(value)
    }
}
  
Group.prototype.has = function (value){
    return this.members.includes(value)
}



Group.from = function(collection) {
const group = new Group()
for (let i = 0; i < collection.length;i++){
    group.add (collection[i])
}
return group;
}
  
const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true
console.log("+++++++++++++++++++ reto 2 ++++++++++++++++++++++");

const Triangulo = function(base, altura){
    this.base = base
    this.altura = altura
}

Triangulo.prototype.calculaArea = function(){
   return (this.base * this.altura)/2
}


const triangulo = new Triangulo(4,6);
console.log(triangulo)
console.log(triangulo.__proto__)
console.log(triangulo.calculaArea())


Object.prototype.saluda = function(){
    console.log("holaa")
  }
  
  t1.saluda()
  