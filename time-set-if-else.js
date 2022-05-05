// skal 6am - 12am good morning
// dupur 12pm - 6pm good afternoon 
// otherwise good evening 

var hour = 12;

if (hour >= 6 && hour < 12)
   console.log("Good Morning");
else if (hour >= 12 && hour < 18)
   console.log("Good Afternoon");
else if (hour >= 0 && hour > 24)
   console.log("***Great MC***");
else
   console.log("Good Evening");
