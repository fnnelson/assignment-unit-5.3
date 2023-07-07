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
        // array[i] indicates which object of the array referenced in the loop,  array[i].title indicates the "title" of that object, and toUpperCase makes the whole string upper-case.
    }
    return array; // the show collection function only SHOWS the title and artist in all-caps, but still returns the same array in the end without changing the array of objects passed through.  If doing that however, we could create a new variable for the upper-cased versions of the title and artist, (I think?) create a new array variable with those, and return that new array.
}

let myNewCollection = showCollection(collection);
console.log("Presenting my collection:", myNewCollection);

console.log("**********Searching Artist in Collection**********");

// Add a function named findByArtist. This function should:

// Take in artist (a string) parameter ✅
// Create an array to hold any results, empty to start ✅
// Loop through the collection and add any objects with a matching artist to the array. ✅
// Return the array with the matching results. If no results are found, return an empty array. ✅
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found. ✅

// function that works with my collection, but no others

// function findByArtist(artist) {
//     let results = [];
//     for (let i = 0; i < collection.length; i++) {  // ...here I'm deciding whether we should also have a collection passed through the function (to work with anyone's collection) 🤔
//         if (collection[i].artist === artist) { 
//             results.push(collection[i]);
//         }
//     }
//     return results; 
// }

// let searchBillWithers = findByArtist("Bill Withers");
// console.log("Albums in collection by Bill Withers:", searchBillWithers);
// let searchWhiteDenim = findByArtist("White Denim");
// console.log("Albums in collection by White Denim:", searchWhiteDenim);
// let searchThinLizzy = findByArtist("Thin Lizzy");
// console.log("Albums in collection by Thin Lizzy:", searchThinLizzy);

function findByArtist(anyRecordCollection, artist) {  // trying to make it universal for anyone's collection (array)
    let results = [];
    for (let i = 0; i < anyRecordCollection.length; i++) {
        // going through loop, each iteration will see if artist matches collection[i].artist (key in object), then push that artist (value for that key in object) onto the results array we created
        if (anyRecordCollection[i].artist === artist) {
            results.push(anyRecordCollection[i]);
        }
    }
    return results; // after any results were found, they'll be pushed onto this array, and findByArtist will return only those results into an array
}

console.log("Current collection:", collection);

let searchBillWithers = findByArtist(collection, "Bill Withers");
console.log("Albums in collection by Bill Withers:", searchBillWithers);
let searchWhiteDenim = findByArtist(collection, "White Denim");
console.log("Albums in collection by White Denim:", searchWhiteDenim);
let searchThinLizzy = findByArtist(collection, "Thin Lizzy");
console.log("Albums in collection by Thin Lizzy:", searchThinLizzy);

let otherCollection = [
    { title: 'Merriweather Post Pavilion', artist: 'Animal Collective', yearPublished: 2009 },
    { title: 'OK Computer', artist: 'Radiohead', yearPublished: 1997 },
    { title: 'All Eyez On Me', artist: '2Pac', yearPublished: 1996 },
    { title: 'Nomad', artist: 'Bombino', yearPublished: 2013 },
    { title: 'In Rainbows', artist: 'Radiohead', yearPublished: 2007 },
    { title: 'Homework', artist: 'Daft Punk', yearPublished: 1997 },
    { title: 'Fancy Footwork', artist: 'Chromeo', yearPublished: 2007 }
];

console.log("Testing with another person's collection:", otherCollection);

searchThinLizzy = findByArtist(otherCollection, "Thin Lizzy");
console.log("Albums in other collection by Thin Lizzy:", searchThinLizzy);
let searchRadiohead = findByArtist(otherCollection, "Radiohead");
console.log("Albums in other collection by Radiohead:", searchRadiohead);

console.log("**********Stretch Goals**********");

// Stretch goals
// Create a function called search. This function should:

// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.
// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:


let aRayArray = [
    { artist: 'Ray Charles', year: 1957 },
    { artist: 'Ray Charles', year: 1958 },
    { artist: 'Ray Charles', year: 1958 },
    { artist: 'Ray Charles', year: 1961 },
    { artist: 'Ray J', year: 2005 },
    { artist: 'Ray Lamontagne', year: 2005 },
]

// function search(collection, artist, year) {
//     let results = [];  
//     if (artist != true || year != true) {
//         return collection;
//     } else {
//         for (let i = 0; i < collection.length; i++) {  // loop to go through each index of array
//             if (collection[i].artist === artist && collection[i].year === year) {  // both artist and year need to match
//                 results.push(collection[i]);  // since we want the whole object added to the results array
//             }
//         }
//     }
//     return results;
// }

function search(objectSearch) {
    console.log("...in the object search function:", objectSearch);
    let results = []; // making new array for search results
    if (objectSearch.artist == false || objectSearch.year == false) { // if either input isn't in the object, will return the full array
        return aRayArray;
    } else {
        console.log("...didn't meet if statement, moving to else"); // had to use this since I wasn't getting the else part right
        for (let i = 0; i < aRayArray.length; i++) { // loop to go through each index of array
            if (aRayArray[i].artist == objectSearch.artist && aRayArray[i].year == objectSearch.year) { // both artist and year in the collection need to match the search item's (object's) artist and year parameters
                results.push(objectSearch); // since we want the whole object added to the results array
            }
        }
    }
    return results;
}

console.log("A Ray rray:", aRayArray);
let raySearchOne = search({ artist: 'Ray Charles', year: '1957' });
console.log("Ray Search One:", raySearchOne);
let raySearchTwo = search({ artist: 'Ray J', year: '1957' });
console.log("Ray Search Two:", raySearchTwo);
let raySearchThree = search({ artist: 'Ray Charles', year: '1958' });
console.log("Ray Search Three:", raySearchThree);
let raySearchFour = search({ artist: 'Ray Charles', year: '1957' });
console.log("Ray Search Four (should return full array):", raySearchFour);  // still need to fix 🤔


// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// IF the search object has a trackName property, only search for that, ignoring any artist or year properties.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION