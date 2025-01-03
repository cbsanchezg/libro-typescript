class Persona{
  nombres:string;
  apellidos:string;
  constructor(nombres:string, apellidos:string){
     this.nombres=nombres;
     this.apellidos=apellidos;
  }
  obtenerNombres(){
     return this.nombres+" "+this.apellidos;
  }
}
var obj= new Persona("Camila", "Sanchez"); // Creación de objeto y llamada del constructor
console.log(obj.obtenerNombres());   // "Camila Sanchez"