var guests = ['Ali', 'Shahid', 'Nawaz'];

//guests who will attend the dinner
console.log(`Hi, ${guests[0]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[1]}, Please accept my invitation fro a dinner`);
console.log(`Hi, ${guests[2]}, I am inviting you to the dinner`);


//guest who excused making it to the dinner
console.log(`${guests[1]} is unable to attend the dinner`);

//invite another guest and replace the oe who unavailable
guests[1] = 'Yasir';

//new list of guests
console.log(`Hi, ${guests[0]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[1]}, Please accept my invitation fro a dinner`);
console.log(`Hi, ${guests[2]}, I am inviting you to the dinner`);
