class Persona{
  nombres:string;
  apellidos:string;
  constructor(){                     // Se ejecuta cuando se crea el objeto
     this.nombres="Daniela";
     this.apellidos="Linares";
  }
  obtenerNombres(){
     return this.nombres+" "+this.apellidos;
  }
}
var obj= new Persona();              // Creación de objeto y llamada del constructor 
console.log(obj.obtenerNombres());   // "Daniela Linares"