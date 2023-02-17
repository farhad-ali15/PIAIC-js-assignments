// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.

function make_sandwich(...ingredients){
    for(let i=0; i<ingredients.length; i++){
        console.log(ingredients[i])
    }
}

console.log(make_sandwich('Bread slices', 'Cheese slices', 'Mayonnaise sauce'));
console.log(make_sandwich('Bread slices', 'Cheese slices', 'Mayonnaise sauce', 'Salt', 'Black pepper'));
console.log(make_sandwich('Bread slices', 'Cheese slices'));