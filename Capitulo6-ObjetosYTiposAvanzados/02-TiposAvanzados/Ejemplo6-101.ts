interface Persona { nombre: string, edad?:number }
let p:Persona = { nombre:"Daniela", edad: undefined }
console.log(p.edad); // undefined