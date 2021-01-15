const request = require('request'); //grabbing to implement request
//request is asking for the url and its info
const breedName = process.argv[2];//bring in bredd name on the command line
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;//store it in variable makes it less messy
request(url,(error, response, body) => { // here we are asking for url
  const data = JSON.parse(body); // changes the body to an object
  if (error) {
    console.log('this is an error:',error);// this is the error
  }
  if (data[0]) {
    console.log(data[0].description);// access the data and index our object, we then find the key description.

  } else {
    console.log(`cat ${breedName} not found`);// otherwise there isn't a breed.
  }
  
});
