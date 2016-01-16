var newMovieForm = document.querySelector('#newMovieForm');
var movieList = document.querySelector('#movies');

function e(type, text, attributes, styles) {
  var element = document.createElement(type);
  element.textContent = text;

  for(var attribute in attributes) {
    if(attributes.hasOwnProperty(attribute)) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  for(var style in styles) {
    if(styles.hasOwnProperty(style)) {
      element.style[style] = styles[style];
    }
  }

  return element;
}

function Movie(title, runTime, yearReleased, genre, description) {
  this.title = title;
  this.runTime = runTime;
  this.yearReleased = yearReleased;
  this.genre = genre;
  this.description = description;
  this.checkedIn = true;
}

Movie.prototype = {
  status: function status() {
    return this.checkedIn;
  },//this should check the checkedIn status of hte movie
  checkIn: function checkIn() {},//This function should check the movie in
  checkOut: function checkOut() {},//This function should check the movie out
  shortDesc: function shortDesc() {}//This function should return a 15 character
              // description of the movie
};

var starWars = new Movie('star wars', 121, 1977, 'drama', 'Luke Skywalker joins forces with a Jedi Knight');

console.log(starWars.status());



