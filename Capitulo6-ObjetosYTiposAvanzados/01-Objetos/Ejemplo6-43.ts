var objeto = { nombre:"Carlos", edad:41 }
console.log(objeto.nombre); // Carlos
Object.defineProperties(objeto,
  {
    “nombre":{value: “Daniela", writable:true, enumerable: false }
  }
 );
console.log(objeto.nombre); // Daniela
console.log(objeto);        // {edad: 41}