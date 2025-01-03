var objeto:any={nombres:'Carlos', edad:41};
Object.defineProperty(objeto, Symbol('symbol1'), 
{
     value:"test1", 
     enumerable:true
});
objeto[Symbol('symbol2')]="test2";
console.log(Object.getOwnPropertySymbols(objeto));     
console.log(objeto);   
/*
[Symbol(symbol1), Symbol(symbol2)]
{
     "nombres": "Carlos",
     "edad": 41
}
*/