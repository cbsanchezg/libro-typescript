var nombre="Camila";                    
function inicio() {         
    var nom1="Daniela";               
    console.log("1ro:"+nom2);         
    if(true){         
        var nom2="Carlos";            // Variable de Alcance de Función
        console.log("2do:"+nom2);     // Uso dentro del bloque de codigo de la Función
    } 
}
inicio();                             // Ejecucion o Llamada de Función
console.log("3ro:"+nom2)              // Error 
/*
1ro:undefined
2do:Carlos
[ERR]: nom2 is not defined
*/