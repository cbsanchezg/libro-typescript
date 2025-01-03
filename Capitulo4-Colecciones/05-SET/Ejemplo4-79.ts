var _set1 = new Set();  // Almacena cualquier tipo de dato
_set1.add("Primero");
_set1.add(25);
console.log(_set1);     // Set (2) {"Primero", 25} 

var _set2 = new Set<number>(); // Almacena solo datos numericos
_set2.add(28);
_set2.add(25);
console.log(_set2);            // Set (2) {28, 25}