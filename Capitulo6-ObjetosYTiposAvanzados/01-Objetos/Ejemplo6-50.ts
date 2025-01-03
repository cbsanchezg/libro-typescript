type Persona = { nombres:string, edad:number}
var a:Persona={nombres:'Carlos', edad:41};
console.log(Object.getOwnPropertyDescriptors(a));
/*
{
  "nombres": {
    "value": "Carlos",
    "writable": true,
    "enumerable": true,
    "configurable": true
  },
  "edad": {
    "value": 41,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
} 
*/