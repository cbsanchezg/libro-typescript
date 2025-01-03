const _map = new Map();
_map.set(1, "Primero").set("1", 25);
for (let elemento of _map.entries()) {
  console.log(elemento);
}
// [1, "Primero"] 
// ["1", 25]