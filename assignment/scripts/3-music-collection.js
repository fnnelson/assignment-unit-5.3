console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array. ✅
let collection = [];

// Add a function named addToCollection. ✅ This function should:
// Take in the album's title, artist, yearPublished as input parameters ✅
// Create a new object having the above properties ✅
// Add the new object to the end of the collection array ✅
// Return the newly created object ✅
// Test the addToCollection function: ✅

function addToCollection(title, artist, yearPublished) {
    console.log("...adding album to addToCollection:", title, artist, yearPublished); // showing arguments taken in by function
    const album = {
        "title": title,
        "artist": artist,
        "yearPublished": yearPublished
    } // creating new object using the 3 arguments - title, artist, yearPublished
    collection.push(album); // pushing newly created object onto end of the collection array
    return album; // returning newly created object (album) as result of function
} //end of addToCollection

console.log("Collection before using function:", collection);
let testAlbum = addToCollection("Debut Album", "Hot New Band", 2023); // creating new variable for album added
console.log("Added to collection:", testAlbum); // logging new album using variable instead of function

collection = [];
console.log("Clearing collection. Current collection:", collection);

// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.) ✅
// Console.log each album as added using the returned value. ✅
// After all are added, console.log the collection array. ✅

console.log("**********Adding 6 Albums**********");

console.log("Collection before using function:", collection);

let firstAlbum = addToCollection("Jailbreak", "Thin Lizzy", 1976);
console.log("Added to collection:", firstAlbum);

let secondAlbum = addToCollection("Songs In The Key Of Life", "Stevie Wonder", 1976);
console.log("Added to collection:", secondAlbum);

let thirdAlbum = addToCollection("It's Album Time", "Todd Terje", 2014);
console.log("Added to collection:", thirdAlbum);

let fourthAlbum = addToCollection("D", "White Denim", 2011);
console.log("Added to collection:", fourthAlbum);

let fifthAlbum = addToCollection("The Rise and Fall of Ziggy Stardust and the Spiders from Mars", "David Bowie", 1972);
console.log("Added to collection:", fifthAlbum);

let sixthAlbum = addToCollection("Nightlife", "Thin Lizzy", 1974);
console.log("Added to collection:", sixthAlbum);

console.log("Current collection:", collection);

// Add a function named showCollection. ✅ This function should:

// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.) ✅
// Console.log the number of items in the array. ✅
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR. ✅
// Test the showCollection function. ✅

console.log("**********Showing Collection**********");

function showCollection(array) {
    console.log("...array in showCollection:", array); // showing which array is passing through this function
    console.log("Number of albums in collection:", array.length);

    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title.toUpperCase()} by ${array[i].artist.toUpperCase()}, published in ${array[i].yearPublished}.`) 
        // array[i] indicates which object of the array referenced, array[i].title indicates the title of that object, and toUpperCase makes the whole string upper-case
    }
    return array; // the show collection function only SHOWS the title and artist in all-caps, but still returns the same array in the end without changing the collection passed through.  If doing that however, we could create a new variable for the upper-cased versions of the title and artist, (I think?) create a new array variable with those, and return that array.
}

let myNewCollection = showCollection(collection);
console.log("Presenting my collection:", myNewCollection);

// Add a function named findByArtist. This function should:

// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.