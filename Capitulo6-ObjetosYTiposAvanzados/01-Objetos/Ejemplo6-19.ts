let persona = { nombres:"Carlos", edad:41 }
Object.defineProperty(persona,
    "nombres", {enumerable: false}
);
console.log(persona); 
/*
{
  "edad": 41
} 
*/