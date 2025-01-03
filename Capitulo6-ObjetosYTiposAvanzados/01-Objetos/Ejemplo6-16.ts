type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
var {nombres, edad}=a;
console.log(nombres); // Carlos
console.log(edad);    // 41