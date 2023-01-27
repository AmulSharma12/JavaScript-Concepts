// 🚀 Interview Question 2
// What is NaN ?

//The full form of NaN is - not a number
// NaN is a property of global object
// In other words, it is a variable in a global scope.
// The initial value of NaN is NOT-A-NUMBER.

var myPhoneNumber = 9999999999;
var myName = "Amul Sharma";

console.log(myName);
console.log(myPhoneNumber);

//How to check whether number entered is number or not ?
//Using NaN() - if it is not a number it will return true otherwise false
console.log(isNaN(myName));
console.log(isNaN(myPhoneNumber));
