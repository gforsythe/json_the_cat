const request = require('request'); //grabbing to implement request
//request is asking for the url and its info




const fetchBreedDescription = ((breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { // here we are asking for url
    if (error) {

      callback(error, null);

      return;
    }
    const data = JSON.parse(body); // changes the body to an object
    if (data[0]) {
      callback(null, data[0].description);

    } else {
      callback(`cat ${breedName} not found`, null);

    }

  });

});

module.exports = { fetchBreedDescription };

// module.exports = {
//   'fetchBreedDescription': fetchBreedDescription
// }