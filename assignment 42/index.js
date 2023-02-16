// 42.	Great Magicians: Start with a copy of your program from Exercise 
// 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
var magicians = ['Ahmed', 'Ali', 'Hamid', 'Qaiser'];
function showMagicians(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
function make_great(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        magician_name[i] = "Hello " + magician_name[i];
        console.log(magician_name[i]);
    }
}
//nomal magicians
showMagicians(magicians);
//change original array
make_great(magicians);
//original array has also changed after this call
showMagicians(magicians);
