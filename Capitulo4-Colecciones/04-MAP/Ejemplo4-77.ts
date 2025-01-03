const _map = new Map();
_map.set(1, "Primero").set("1", 25);
var _obj=Array.from(_map);
console.log(_obj); //  [[1, "Primero"], ["1", 25]]