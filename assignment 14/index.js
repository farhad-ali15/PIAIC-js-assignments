// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
var friends = ["farhad", "yasir", "obaid", "hassan"];
var i = 0;
for (i = 0; i < friends.length; i++) {
    console.log("hi ".concat(friends[i], ", you are invited on dinner"));
}
