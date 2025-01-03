const _map = new Map();
_map.set(1, "Primero").set("1", 25);
var _obj=Object.fromEntries(_map);
console.log(_obj); // { "1": 25 }