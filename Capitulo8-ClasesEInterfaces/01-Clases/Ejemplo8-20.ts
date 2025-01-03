class Persona{
  private _nombre:string;
  get nombre(){
    return this._nombre;
  }
  set nombre(nombre:string){
    this._nombre=nombre;
  }
}
var obj=new Persona();
obj.nombre=Daniela";
console.log(obj.nombre)  // "Daniela"
consoel.log(obj_nombre)  // Error