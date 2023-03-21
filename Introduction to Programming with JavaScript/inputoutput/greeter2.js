let rlSync = require('readline-sync');

let getNames = (first, last) => {
  let firstName = rlSync.question("What is your first name?")
  let lastName = rlSync.question("What is your last name?")
  let fullName = (firstName.toString) + (lastName.toString);
}

getNames();
console.log(`Hello, ${fullName}!`)