var guests = ['Ali', 'Shahid', 'Nawaz'];
//guests who will attend the dinner
console.log("Hi, ".concat(guests[0], ", I am inviting you to the dinner"));
console.log("Hi, ".concat(guests[1], ", Please accept my invitation fro a dinner"));
console.log("Hi, ".concat(guests[2], ", I am inviting you to the dinner"));
//guest who excused making it to the dinner
console.log("".concat(guests[1], " is unable to attend the dinner"));
//invite another guest and replace the oe who unavailable
guests[1] = 'Yasir';
//new list of guests
console.log("Hi, ".concat(guests[0], ", I am inviting you to the dinner"));
console.log("Hi, ".concat(guests[1], ", Please accept my invitation fro a dinner"));
console.log("Hi, ".concat(guests[2], ", I am inviting you to the dinner"));
//informing the people for more invitation
console.log('Hello All **** We have found a bigger dinner table. So inviting more people');
//adding new element to the start of an array
guests.unshift('Muhammad Haris');
//print the new list of guests
console.log(guests);
var start = guests.length / 2;
//adding new geusts in the middle of the array
guests.splice(start, 0, 'Umer');
//adding new element to the end of an array
guests.push('Javed Ahmed');
console.log("Hi, ".concat(guests[0], ", I am inviting you to the dinner"));
console.log("Hi, ".concat(guests[1], ", Please accept my invitation fro a dinner"));
console.log("Hi, ".concat(guests[2], ", I am inviting you to the dinner"));
console.log("Hi, ".concat(guests[3], ", I am inviting you to the dinner"));
console.log("Hi, ".concat(guests[4], ", I am inviting you to the dinner"));
console.log("Hi, ".concat(guests[5], ", I am inviting you to the dinner"));
