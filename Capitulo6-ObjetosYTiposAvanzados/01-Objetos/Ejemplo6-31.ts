let persona = { nombres:"Carlos", edad:41 }
console.log(Object.getOwnPropertyNames(persona)); //  ["nombres", "edad"]
var proto=Object.getPrototypeOf(persona);
console.log(Object.getOwnPropertyNames(proto));
/* 
[
  "constructor", 
  "__defineGetter__",  
  "__defineSetter__", 
  "hasOwnProperty", 
  "__lookupGetter__", 
  "__lookupSetter__", 
  "isPrototypeOf", 	
  "propertyIsEnumerable", 
  "toString", 
  "valueOf", 
  "__proto__", 
  "toLocaleString"
] 
*/