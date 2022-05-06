function calculator(num) {
   var factorial = 1;
   for (var i = 1; i <= num; i++) {
      var factorial = factorial * i;
   }
   return factorial;
}

var result = calculator(6);
console.log(result);