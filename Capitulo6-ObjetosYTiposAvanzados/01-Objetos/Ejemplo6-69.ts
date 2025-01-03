let persona = { nombres:"Carlos", edad:41 }
Object.seal(persona);
persona.nombres="Daniela";
console.log(persona); 
/*{
  "nombres": "Daniela",
  "edad": 41
}*/