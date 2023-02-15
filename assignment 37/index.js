// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love JavaScript'; }
    console.log("the size is ".concat(size, " and message is ").concat(text));
}
//call function with default parameters
make_shirt();
//call the function with custonparameters
make_shirt('medium', 'I love JavaScript');
make_shirt('small', 'Do not give up!');
