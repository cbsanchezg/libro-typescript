var objeto:any={}; // Iniciamos con un objeto vacio
Object.defineProperties(objeto,
  {
    "nombre":{value: "Carlos", writable:true, enumerable: true },
    "edad":{value:41, writable:true, enumerable: true }
  }
 );
console.log(objeto.nombre); // "Carlos"