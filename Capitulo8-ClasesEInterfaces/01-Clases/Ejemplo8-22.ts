abstract class Operaciones{
  abstract operar(a:number, b:number):number;
}
class Suma extends Operaciones{
  operar(a:number, b:number):number{
    return a+b;
  }
}
let obj=new Suma();
console.log(obj.operar(15,33));      // 48