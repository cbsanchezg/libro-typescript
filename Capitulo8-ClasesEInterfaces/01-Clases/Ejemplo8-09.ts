class Persona{
  nombres:string;
  edad:number;  
  constructor(n:string, e:number){
    this.nombres=n;
    this.edad=e;
  }
}
var obj= new Persona("Camila", 14);  // Creación de instancia 
console.log(typeof(obj));            // "object"
console.log(typeof(obj.nombres));    // "string"
console.log(typeof(obj.edad));       // "number"