let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let stringLength = arr.map(num => num.length);
  let oddArray = stringLength.filter(num => num % 2 !== 0);
  return oddArray;
}

console.log(oddLengths(arr));