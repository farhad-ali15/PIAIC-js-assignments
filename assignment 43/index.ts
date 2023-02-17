// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

var magicians = ['Ahmed', 'Ali', 'Hamid', 'Qaiser'];

function show_magicians(magician_name){
    for(let i=0; i<magician_name.length; i++){
        console.log(magician_name[i])
    }
}


function make_great(magician_name){
    let new_array = [...magician_name];
    for(let i=0; i<new_array.length; i++){
        new_array[i] =  new_array[i]+ " The Great";
        console.log(new_array[i])
    }
}

//nomal magicians
show_magicians(magicians);

//change copied array
make_great(magicians)

//original array hasn't changed
show_magicians(magicians);
