function isLeapYear(year){
   let remainder = year % 4;
   if(remainder == 0) {
      return false;
   } else {
      return true;
   }
}

let result = isLeapYear(3998);
console.log(result);