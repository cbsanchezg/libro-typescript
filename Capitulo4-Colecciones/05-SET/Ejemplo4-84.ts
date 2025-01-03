let _set = new Set();
_set.add("Primero").add(25);
for (let elemento of _set.entries()) {
  console.log(elemento);
}
// ["Primero", "Primero"] 
// [25, 25]