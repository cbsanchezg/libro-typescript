var codigo:unknown;     
codigo="Daniela";
if(typeof codigo =="string"){
    console.log(codigo.toUpperCase());      // Daniela
}
codigo=25.1457;
if(typeof codigo =="number"){
    console.log(codigo.toPrecision(4));     // 25.15
}