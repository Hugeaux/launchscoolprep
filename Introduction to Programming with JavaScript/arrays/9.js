let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function filterFunction(numbers) {
  let newArray = numbers.filter(num => num === 3);
  if (newArray.length !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(filterFunction(numbers3));

This would do it:

> numbers1.includes(3);
= true

> numbers2.includes(3);
= false

> numbers3.includes(3);
= false