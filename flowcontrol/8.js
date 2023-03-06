function checkValue(number) {
  if ((number >= 0) && (number <= 50)) {
    console.log('This number is between 0 and 50');
  } else if ((number >= 51) && (number <= 100)) {
    console.log('This number is between 51 and 100');
  } else if (number > 100) {
    console.log('This number is larger than 100');
  } else if (number < 0) {
    console.log('This is a negative number');
  } else {
    console.log("I don't know about this one");
  }
}

checkValue(150);