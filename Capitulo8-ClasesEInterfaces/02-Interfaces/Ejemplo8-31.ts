interface Persona{
  nombres:string;
}
interface Ingeniero extends Persona{
  especialidad:string;
}
const p:Ingeniero = {nombres:"Carlos", especialidad:"Sistemas"};
console.log(p); // {"nombres": "Carlos", "especialidad": "Sistemas"} 