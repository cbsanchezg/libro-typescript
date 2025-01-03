const _map = new Map();
_map.set(1, "Primero").set("1", 25);
_map.forEach( (value, key, map) => {
  console.log(key+"-"+value);
});
// "1-Primero" 
// "1-25"