// convert string to number
var number1 = 0.1;
var number2 = '0.2';
number2 = +number2;

var total = number1 + number2;

total = total.toFixed(3);

console.log(total);
