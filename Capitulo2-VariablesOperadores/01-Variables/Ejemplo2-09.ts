var nombre="Camila";                    
function inicio() {         
    var nom1="Daniela";               // Variable de Alcance de Función, Método o Clase
    console.log("1ro:"+nom1);         // Uso dentro de Función
    if(true){         
        let nom2="Carlos"; 
        console.log("2do:"+nom1);     // Uso dentro del bloque de codigo de la Función
    } 
}
inicio();                               // Ejecucion o Llamada de Función
console.log("3ro:"+nom1)                // Error
/* 
1ro: Camila
2do: Camila
[ERR]: nom1 is not defined
*/