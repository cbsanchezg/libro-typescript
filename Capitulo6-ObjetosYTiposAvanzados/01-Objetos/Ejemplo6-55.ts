interface Persona extends Info {
  nombres:string,
  edad:number
}
interface Info {
  pasaporte:string
}
var a:Persona={nombres:’Carlos’, edad:41, pasaporte: "12304389"};
console.log(Object.hasOwn(a, "edad"));          // true
console.log(Object.hasOwn(a, "genero"));        // false
console.log(Object.hasOwn(a, "pasaporte"));     // true