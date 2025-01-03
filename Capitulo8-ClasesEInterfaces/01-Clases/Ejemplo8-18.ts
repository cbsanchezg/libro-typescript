class Persona{
  nombres:string;
  apellidos:string;
  readonly saludo:string="Buenos Días";
  getNombres(){
     return this.saludo+" "+this.nombres+" "+this.apellidos;
  }
}
var obj= new Persona(); 
obj.nombres="Daniela";   
obj.apellidos="Linares"; 
console.log(obj.getNombres()); // "Buenos Días Daniela Linares" 
console.log(obj.saludo)        // "Buenos Días"
obj.saludo="Hola";             // Error