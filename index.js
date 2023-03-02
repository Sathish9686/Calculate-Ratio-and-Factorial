let factorialOfNumber = require("../factorial/index");
let ratioOfTwoNumbers = require("../ratio/index");

let ratioAndFactorial = (num1, num2, num) => {
  const factorial = factorialOfNumber(num1, num2);
  const ratio = ratioOfTwoNumbers(num);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
