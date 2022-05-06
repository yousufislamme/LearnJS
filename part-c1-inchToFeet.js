function converter(inch) {
   var feet = inch/12;
   return feet;
}

var dadaFeet = converter(72);
console.log(dadaFeet);
var dadiFeet = converter(60);
console.log(dadiFeet);
