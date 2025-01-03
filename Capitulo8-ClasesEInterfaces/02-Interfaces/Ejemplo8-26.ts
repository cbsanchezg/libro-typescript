interface Persona{
  nombres:string;
  edad:number;   
}
const p:Persona = {nombres:"Daniela", edad:42};
console.log(p.nombres); // "Daniela"
console.log(p["edad"]); // 42