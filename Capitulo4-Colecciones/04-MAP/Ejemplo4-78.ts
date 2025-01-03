var _map = new WeakMap();
let obj1={"test1":22};
let obj2={"test2":25};
_map.set(obj1, "Primero");
_map.set(obj2, 25);
console.log(_map);              // WeakMap: {}
console.log(_map.get(obj1));    // "Primero" 
_map.delete(obj1);
console.log(_map.has(obj1));    // false
console.log(_map.get(obj1));    // undefined