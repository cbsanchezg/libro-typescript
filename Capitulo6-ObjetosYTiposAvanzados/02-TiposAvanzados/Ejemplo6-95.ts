type Persona={ nombre:string, edad:number}
var p:Persona={ nombre:"Daniela", edad:41}
console.log("nombre" in p);     // true
console.log("nombres" in p);    // false