let score = "utkarsh"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33  number in a string is converted into number
"33abc" => NaN (Not an Number) after conversion it gives NaN but still it converted to number
true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);