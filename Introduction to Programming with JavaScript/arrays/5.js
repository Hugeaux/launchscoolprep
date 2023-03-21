let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
 
function findIntegers(array) {
  let integerArray = array.filter(num => Number.isInteger(num) === true)
  return integerArray;
}

console.log(findIntegers(things));