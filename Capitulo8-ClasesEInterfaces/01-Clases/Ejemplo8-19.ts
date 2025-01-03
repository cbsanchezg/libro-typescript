class Persona{
  apellido:string;
  get nombre(){
    return this.nombre;
  }
  set nombre(nombre:string){
    this.nombre=nombre;
  }
}
var obj=new Persona();
obj.nombre="Daniela";
obj.apellido="Linares";
console.log(obj.nombre)    // "Daniela"
console.log(obj.apellido)  // "Linares"