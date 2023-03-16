let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let finalKeys = [];


objKeys.forEach(element => finalKeys.push(element.toUpperCase()));

console.log(finalKeys);
console.log(obj);