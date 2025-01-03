type Persona = {
  nombres:string,
  apellido:string,
  edad:number
}
var a:Persona={nombres:'Carlos', apellido:'Sanchez', edad:41};
var {nombres, ...rest}=a;
console.log(nombres);       // Carlos
console.log(rest);          // {"apellido": "Sanchez", "edad": 41}
console.log(rest.apellido); // "Sanchez"
console.log(rest.edad);     // 41