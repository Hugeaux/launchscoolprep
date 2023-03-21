let array = [3, 5, 7];

function sumOfSquares(array) {
  let newArray = array.map(num => num * num);
  let summedArray = newArray.reduce((accumulator, element) => accumulator + element);
  return summedArray; 
}

console.log(sumOfSquares(array)); // => 83