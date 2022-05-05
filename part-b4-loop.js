var products = ["mouse", "phone", "macbook", "iMac"];

for (var i = 0; i < products.length; i++) {
   var element = products[i];
   console.log([i] + " " + element);

}


var mark = [12, 22, 44, 93, 63];
function largerNumber(numbers) {
   var larger = numbers[0];
   for (let i = 0; i < numbers.length; i++) {
      var element = numbers[i];
      if (element > larger) {
         larger = element;
      }
   }
   return element;
}
var output = largerNumber([23, 55, 77, 12, 98]);

console.log(output);


