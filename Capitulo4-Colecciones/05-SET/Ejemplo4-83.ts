let _set = new Set();
_set.add("Primero").add(25);
_set.forEach( (value, valueAgain, set) => {
  console.log(value);
});
// "Primero" 
// "25"