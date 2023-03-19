function isNotANumber(value) {
  if (value === String) {
    return false;
  } else if (value === Number) {
    return false;
  } else if (value === Boolean) {
    return false;
  } else if (value === undefined) {
    return false;
  } else if (value === Symbol) {
    return false;
  } else if (value === BigInt) {
    return false;
  } else if (value === null) {
    return false;
  }
  else {
    return true;
  }
}

console.log(isNotANumber(NaN));