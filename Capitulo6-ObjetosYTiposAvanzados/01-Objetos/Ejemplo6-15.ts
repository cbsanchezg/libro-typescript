type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
var nombres=a.nombres;
var edad=a.edad;
console.log(nombres); // Carlos
console.log(edad);    // 41