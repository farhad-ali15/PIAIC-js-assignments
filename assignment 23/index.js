// 23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
//test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
//test 2
var number = 90;
console.log("Is number > 50? I predict True.");
console.log(number > 50); //true
//test 3
console.log("Is number >= 50? I predict True.");
console.log(number >= 90); //true
//test 4
console.log("Is number == 90? I predict True.");
console.log(number == 90); //true
//test 5
console.log("Is number ===? I predict True.");
console.log(number === 90); //true
//test 6
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //false
//test 7
console.log("Is number === '90'? I predict False.");
console.log(number === 100); //false
//test 8
console.log("Is number < 90? I predict False.");
console.log(number < 40); //false
//test 9
console.log("Is number != 90? I predict False.");
console.log(number != 90); //false
//test 10
console.log("Is car == 'subaru '? I predict False.");
console.log(car == 'subaru '); //false
