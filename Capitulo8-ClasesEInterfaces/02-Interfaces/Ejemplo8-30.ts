interface Persona{
  nombres:string;
}
const p:Persona = {nombres:"Daniela"};
console.log(p);  // { "nombres": "Daniela"}
interface Persona{
  apellidos?:string;
}
p.apellidos="Linares";
console.log(p);  // { "nombres": "Daniela", "apellidos":"Linares"}