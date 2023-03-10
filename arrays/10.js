let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

function sixCheck(arr) {
  if (arr.contains(6)) {
    let i = arr.findIndex(6);
    arr[i] = 606
  } else {
    console.log('No 6 here!');
  }
}

Easy way:

arr[1][3] = 606;