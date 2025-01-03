interface Persona{
  nombres:string;
  edad?:number;   
}
const carlos:Persona = {nombres:"Carlos", edad:36};
const daniela:Persona = {nombres:"Daniela"}
const desconocido:Persona = {edad:36}  // Error