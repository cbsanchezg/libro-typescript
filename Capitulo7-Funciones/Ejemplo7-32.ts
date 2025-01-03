function suma(a:number, b:number):number;       // Firma de 1ra Función
function suma(a:number, b:string):boolean;      // Firma de 2da Función
function suma(a:any,b:any):any {                // Función Genérica
    if(typeof(b)=="number") {return a+b;}
    return true;
}
console.log(suma(2,3));              // 5
console.log(suma(2, "hola"));        // true
console.log(suma("hola", "hola"));   // Error, firma de funcion no declarada