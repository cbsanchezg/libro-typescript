function esPar(n: string | number){
    if(typeof n=="number"){
        if(n%2==0)  {console.log("Es par")}
        else        {console.log("Es impar")}
    }
    if(typeof n=="string"){console.log(n.length);}
}
esPar(16);         // "Es par"
esPar("Hola");     // 4