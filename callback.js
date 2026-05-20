function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Sunil", sayGoodbye);

function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

function displayResult(value) {
  console.log("The result is: " + value);
}

calculate(5, 7, displayResult);
