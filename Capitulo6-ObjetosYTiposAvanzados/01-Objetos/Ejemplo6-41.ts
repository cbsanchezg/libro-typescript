type Datos = { nombres:string }
var origen:Datos={nombres:'Carlos'};
var destino=Object.create(origen);
console.log(destino);       //  {}
destino.nombres="Daniela";  //  Actualizamos la propiedad nombres
console.log(destino);       //  { "nombres": "Daniela"}