// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function make_shirt(size='large', text='I love JavaScript'){
    console.log(`the size is ${size} and message is ${text}`)
}

//call function with default parameters
make_shirt();

//call the function with custonparameters
make_shirt('medium', 'I love JavaScript');
make_shirt('small', 'Do not give up!');
