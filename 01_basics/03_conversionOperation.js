let score = "utkarsh"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33" => 33  number in a string is converted into number
"33abc" => NaN (Not an Number) after conversion it gives NaN but still it converted to number
true => 1; false => 0
*/

let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
// null => false

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************************* Operations **********************************

let value = 45
let divValue = value/5
// console.log(divValue)

// console.log(2+2);    // Addition
// console.log(2-2);    // Subtraction
// console.log(2*2);    // Multiplication
// console.log(2/2);    // Division
// console.log(2**3);   // power
// console.log(2%3);    // Remainder

let str1 = "Hello"
let str2 = " Utkarsh"

let str3 = str1 + str2 
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((1+2)*3/4);

// // console.log(true);
// console.log(+true);
// // console.log(true+);
// console.log(+"")

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion