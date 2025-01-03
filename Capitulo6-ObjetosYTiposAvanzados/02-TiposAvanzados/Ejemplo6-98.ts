type Moto={ tipo:"moto",  // Discriminante para Moto
  marca:string, posicion_manejo: "recto" | "inclinado" | "recostado";
}
type Auto={ tipo:"auto"; // Discriminante para Auto
  marca: string, transmision: "mecanica" | "automatica";
}
type Vehiculo= Auto | Moto; 
function verificarTipo(v:Vehiculo){ 
  switch(v.tipo){ 
    case "moto":{console.log("Es una Moto");} break;
    case "auto":{console.log("Es un Auto"); } break;
    default: console.log("No existe"); break;
  }
}
var a:Vehiculo = {tipo:"moto", marca:"Honda", posicion_manejo: "recto"};
var b:Vehiculo = {tipo:"auto", marca:"Volkswagen", transmision:"mecanica"};
verificarTipo(a);  // "Es una Moto"
verificarTipo(b);  // "Es un Auto"