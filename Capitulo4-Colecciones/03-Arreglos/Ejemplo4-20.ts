var arr:string[];
arr = ["e1", "e2", "e3"];
console.log(arr);          // ["e1", "e2", "e3"]
arr.push("e4");
arr.push("e5", "e6");
console.log(arr);          // ["e1", "e2", "e3", "e4", "e5", "e6"]
arr.pop();
console.log(arr);          // ["e1", "e2", "e3", "e4", "e5"]