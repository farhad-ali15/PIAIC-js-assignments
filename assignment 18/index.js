// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// // • Print your array in its original order.
// // • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
var locations = ['New York', 'London', 'Dubai', 'Switzerland', 'Turkey'];
console.log('Original Order', locations);
// array sorting with changing original
var sortedLocations = locations.slice().sort();
console.log('Array in alphabetical Order', sortedLocations);
//original array unchanged
console.log('Original Order', locations);
console.log('Array in reverse Order', locations.slice().reverse().sort());
console.log('Original Order', locations);
