require("dotenv").config();
var axios = require("axios");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//OMDB API Request with Axios
var OMDBapi = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr.Nobody";
  }
  axios
    .get(
      "http://www.omdbapi.com/?t=" +
        movieName +
        "&y=&plot=full&&apikey=26fbc7b2"
    )
    .then(function(response, error, body) {
      if (error) {
        var jsonData = JSON.parse(body);
        console.log("Title: " + jsonData.Title);
        console.log("Year: " + jsonData.Year);
        console.log("Rated: " + jsonData.Rated);
        console.log("Country: " + jsonData.Country);
        console.log("Language: " + jsonData.Language);
        console.log("Plot: " + jsonData.Plot);
        console.log("Actors: " + jsonData.Actors);
        console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
      }
    });
};

// execute different Command Lines:

//Spotify-API:

//User inputs:

var userInput = function(argOne, argTwo) {
  userCommand(argOne, argTwo);
};

userInput(process.argv[2], process.argv[3]);
