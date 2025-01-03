interface Persona {  
  caminar(distancia:string):void;
}
interface Persona {  
  caminar(distancia:number):void;
}
const obj:Persona={caminar:(d) => d}
console.log(obj.caminar(100));        // 100
console.log(obj.caminar("mucho"));    // "mucho"