let _set = new Set();
_set.add("Primero").add(25);
console.log(_set);           // Set (2) {"Primero", 25}
console.log(_set.has(25));   // true
console.log(_set.has(0));    // false