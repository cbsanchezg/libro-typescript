interface Persona { nombre: string, edad:string|null|undefined}
let p:Persona = { nombre:"Daniela", edad:null}
console.log(p.edad); //null
var nombre:string|null|undefined;
nombre=null;
console.log(nombre); //null