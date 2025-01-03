var nombre="Camila";                    // Variable de Alcance Global
function inicio() {         
    var nom1="Daniela";    
    console.log("1ro:"+nombre);         // Uso dentro de Función
    if(true){         
        let nom2="Carlos"; 
        console.log("2do:"+nombre);     // Uso dentro del bloque de codigo de la Función
    } 
}
inicio();                               // Ejecucion o Llamada de Función
console.log("3ro:"+nombre);             // Uso fuera de la Función
/* 
1ro: Camila
2do: Camila
3ro: Camila
*/