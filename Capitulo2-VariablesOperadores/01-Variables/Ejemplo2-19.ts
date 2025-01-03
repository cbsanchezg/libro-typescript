const descuento = 20;      //Acceso Global 
if(true){
  const descuento = 10;    //Acceso de Bloque
  console.log(descuento);  // 10
} 
console.log(descuento);    // 20