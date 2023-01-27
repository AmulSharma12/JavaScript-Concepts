NaN === NaN         //false
Number.NaN === NaN  //false
isNaN(NaN)          //true 
isNaN(Number.NaN)   //true
Number.isNaN(NaN)   //true


//because is NaN() -> function returns true once they recived value as not-a-number
console.log(Number.isNaN(NaN))