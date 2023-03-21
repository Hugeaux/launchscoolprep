let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(arr,reg) {
  let finalMatches = [];
  for (let index = 0; index < arr.length;  index += 1)
    if (reg.test(arr[index])) {
      finalMatches.push(arr[index]);
    }
    return finalMatches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']