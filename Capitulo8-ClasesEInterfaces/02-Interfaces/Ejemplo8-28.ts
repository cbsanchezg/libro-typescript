interface Persona{
  nombres:string;
  readonly edad:number;   
}
const carlos:Persona = {nombres:"Carlos", edad:36};
console.log(carlos); // { "nombres": "Carlos", "edad": 36 }
carlos.edad=41; 
console.log(carlos); // { "nombres": "Carlos", "edad": 36 }