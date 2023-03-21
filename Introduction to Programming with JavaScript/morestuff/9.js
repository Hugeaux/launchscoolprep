function isZero(value) {
  if (value/0 === Infinity) {
    return false;
  } else {
    return true;
  }
}

console.log(isZero(-0));