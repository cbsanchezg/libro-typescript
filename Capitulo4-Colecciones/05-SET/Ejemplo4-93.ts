var _set = new WeakSet();
let obj1={"test1":22};
let obj2={"test2":25};
_set.add(obj1);
_set.add(obj2);
console.log(_set);              // WeakSet: {}
console.log(_set.has(obj2));    // true
_set.delete(obj2);          
console.log(_set.has(obj2));    // false