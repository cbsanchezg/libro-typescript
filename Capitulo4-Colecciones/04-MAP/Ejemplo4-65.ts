const _map = new Map();
_map.set(1, "Primero").set("1", 25);
console.log(_map);    // Map (2) {1 => "Primero", "1" => 25}
_map.delete(1);
console.log(_map);    // Map (1) {"1" => 25}