type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
console.log(Object.getOwnPropertyDescriptor(a, "nombres"));
/*
{
  "value": "Carlos",
  "writable": true,
  "enumerable": true,
  "configurable": true
} 
*/