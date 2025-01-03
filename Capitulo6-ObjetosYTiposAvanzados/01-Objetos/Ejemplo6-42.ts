type Datos = { nombres:string }
var origen:Datos={nombres:'Carlos'};
var destino=Object.create(origen, 
{
    "edad":
    {
         value:41, 
         writable:true, 
         enumerable: true 
    }
}
);
console.log(destino);       //  { "edad": 41 }
destino.nombres="Daniela";  
destino.edad=15;
console.log(destino);       //  { "edad":15, "nombres": "Daniela"}