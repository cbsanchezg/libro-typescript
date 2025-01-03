type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
console.log(Object.getOwnPropertyNames(a)); // ["nombres", "edad"]