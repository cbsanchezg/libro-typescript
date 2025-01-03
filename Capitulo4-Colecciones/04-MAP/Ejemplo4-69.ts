const _map = new Map();
_map.set(1, "Primero").set("1", 25);
for (let clave of _map.keys()) {
  console.log(clave);
}
// 1 
// "1"