const _map = new Map();
_map.set(1, "Primero").set("1", 25);
for (let valor of _map.values()) {
  console.log(valor);
}
// "Primero"
// 25