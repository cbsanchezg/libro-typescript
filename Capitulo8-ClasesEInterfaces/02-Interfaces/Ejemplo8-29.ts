interface Persona{
  nombres:string;
  [prop: string]: any;   
}
const p:Persona = {nombres:"Daniela"};
console.log(p);  // { "nombres": "Daniela"}
p.apellidos="Linares";
console.log(p);  // { "nombres": "Daniela", "apellidos":"Linares"}