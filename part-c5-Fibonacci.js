

var fibo = [0, 1];

for(var i = 2; i <= 12; i++){
   fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// Different method

var fibo = [0, 1];

function fiboCount(n) {
   for (var i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
   }

   return fibo;
}

var result = fiboCount(12);

console.log(result);