let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let oddEven = [];

for (i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    oddEven.push('even');
  } else {
    oddEven.push('odd');
  }
}