const _map = new Map();
_map.set(1, "Primero").set("1", 25);
console.log(_map);         // Map (2) {1 => "Primero", "1" => 25} 
console.log(_map.size);    // 2
_map.clear();
console.log(_map);         // Map (0) {} 
console.log(_map.size);    // 0