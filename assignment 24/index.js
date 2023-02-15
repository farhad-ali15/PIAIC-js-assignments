// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality and inequality with strings
var username = 'YASIR';
var age = 33;
console.log(username === 'YASIR'); //true
console.log(age >= 40); //false
//Tests using the lower case function
console.log(username.toLowerCase() == 'yasir'); //true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(age >= 33); //true
console.log(age <= 33); //true
console.log(age == 33); //true
console.log(age != 33); //false
console.log(age > 30); //true
console.log(age < 40); //true
//Tests using "and" and "or" operators
console.log(username == 'YASIR' && age == 33); //true
console.log(username == 'YASIR' || age > 40); //true
//Test whether an item is in a array
var names = ['yasir', 'ali', 'hassan'];
console.log('item is in a array', names.includes('ali')); //true
console.log('item is not in an array', !names.includes('Ahmed')); //true
