// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Ahmed', 'Ali', 'Hamid', 'Qaiser'];
function show_magicians(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
function make_great(magician_name) {
    var new_array = __spreadArray([], magician_name, true);
    for (var i = 0; i < new_array.length; i++) {
        new_array[i] = new_array[i] + " The Great";
        console.log(new_array[i]);
    }
}
//nomal magicians
show_magicians(magicians);
//change copied array
make_great(magicians);
//original array hasn't changed
show_magicians(magicians);
