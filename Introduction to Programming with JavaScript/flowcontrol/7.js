function toCaps(words) {
  if (words.length > 10) {
    return words.toUpperCase();
  } else {
    return words;
  }
}

console.log(toCaps('Hellooooo everybody'));