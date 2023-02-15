// 3.	Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.






function titleCase(str) {
    // Step 1. Lowercase the string
    str = str.toLowerCase();
    
    
    // Step 2. Split the string into an array of strings
    str = str.split(' ');
    
    
    // Step 3. Create the FOR loop
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   
    }
    
    // Step 4. Return the output
    return str.join(' '); 
  };


  var userName = "farhad";
  
   






console.log(`${userName.toUpperCase()}`);
console.log(`${titleCase(userName)}`);
console.log(`${userName.toLowerCase()}`);

