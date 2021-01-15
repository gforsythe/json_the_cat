const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];//bring in bredd name on the command line


// const fetchCallback = (error, desc) => {
//   if (error) { // checks for truthy (any string length, true, objects, etc...)
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// }

// fetchCallback(null, 'hello world');

// fetchBreedDescription(breedName, fetchCallback);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) { // checks for truthy (any string length, true, objects, etc...)
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// callback(error, null)
// callback(null, desc)