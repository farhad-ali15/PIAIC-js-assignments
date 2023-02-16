// 40.	Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, number_of_traks) {
    if (artist_name === void 0) { artist_name = ""; }
    if (album_title === void 0) { album_title = ''; }
    if (number_of_traks === void 0) { number_of_traks = 0; }
    if (number_of_traks == 0) {
        return {
            artist_name: artist_name,
            album_title: album_title
        };
    }
    else {
        return {
            artist_name: artist_name,
            album_title: album_title,
            number_of_traks: number_of_traks
        };
    }
}
console.log(make_album('Atif Aslam', 'Some latest Album'));
console.log(make_album('Adnan Sami', 'Some latest Album 1'));
console.log(make_album('Arif Lohar', 'Some latest Album 2'));
console.log(make_album('Naseebo Lal', 'Some latest Album 2', 8));
