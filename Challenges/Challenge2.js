// Challenge 2 - Datatypes
var ans1 = 0;
var ans2 = 0;

//Case 1 -  When number and string addition happens - concat is the answer
//Number + String  ||  String + Number => concatenation

ans1 = 10 + "30";
ans2 = "30" + 10;
console.log(ans1 + " " + ans2);
console.log(typeof ans1);
console.log(typeof ans2);

//Case 2 - When number and string subtraction happens - it will perform  subtraction
//Number - String  ||  String - Number => subtraction

ans1 = 9 - "5";
ans2 = "9" - 5;
console.log(ans1 + " " + ans2);
console.log(typeof ans1);
console.log(typeof ans2);

//Case 3 - Whens string and string added - result is concatenation of those string
//String + String = concat

ans1 = "5" + "9";
console.log(ans1);
console.log(" " + " ");
console.log(" " + 0);

//Case 4 - When string and string use minus operator - then it is NaN
//String - String = NaN

ans1 = "string" - "string";
ans1 = "8" - "3";
console.log(ans1);

//Conclusion -
// If it is add operator -> resultant will be concatentaion
//If it is subtract operator -> resultant will be subtraction in case both will be number
//in any of operand is string in Subtraction operator -> result will be NaN

//Case 5 - boolean - normal addition and subtraction will happen representing these below integer values
//1 - true
//0 - false

console.log(true + true);
console.log(true - true);
console.log(true + false);
console.log(true + true);
