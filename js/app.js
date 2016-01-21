/*========================== variable space =============================*/

var newMovieForm = document.querySelector('#newMovieForm');
var movieList = document.querySelector('#movies');
var movies =  [
  ['star wars', 121, 1977, 'drama', 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.'],
  ['empire strikes back', 124, 1980, 'drama', 'After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.'],
  ['return of the jedi', 134, 1983, 'drama', 'After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.'],
  ['spaceballs', 96, 1987, 'comedy', 'Planet Spaceball\'s President Skroob sends Lord Dark Helmet to steal Planet Druidia\'s abundant supply of air to replenish their own, and only Lone Starr can stop them.'],
  ['monty python and the holy grail', 91, 1975, 'comedy', 'King Arthur and his knights embark on a low-budget search for the Grail, encountering many very silly obstacles.'],
  ['time bandits', 110, 1981, 'action', 'A young boy accidentally joins a band of dwarves as they jump from era to era looking for treasure to steal.'],
  ['robin hood men in tights', 104, 1993, 'comedy', 'A spoof of Robin Hood in general and Robin Hood: Prince of Thieves (1991) in particular.'],
  ['the princess bride', 98, 1987, 'comedy', 'While home sick in bed, a young boy\'s grandfather reads him a story called The Princess Bride.'],
  ['serenity', 119, 2005, 'drama', 'The crew of the ship Serenity tries to evade an assassin sent to recapture one of their number who is telepathic.'],
  ['the hitchhiker\'s guide to the galaxy', 109, 2005, 'comedy', 'Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of "The Hitchhiker\'s Guide to the Galaxy."']
];

/*======================= event listener space ===========================*/

newMovieForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var title = newMovieForm.movieTitle.value;
  var runtime = newMovieForm.runTime.value;
  var yearReleased = newMovieForm.yearReleased.value;
  var genre = newMovieForm.genre.value;
  var description = newMovieForm.description.value;
  movieList.innerHTML = '';
  var movie = [title, runtime, yearReleased, genre, description];
  movies.push(movie);
  newMovieForm.reset();

  capTheArray();
  objectAndElemnt();
});

/*========================== function space =============================*/

// element builder function
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

// Movie object constructor function
function Movie(title, runTime, yearReleased, genre, description) {
  this.title = title;
  this.runTime = runTime;
  this.yearReleased = yearReleased;
  this.genre = genre;
  this.description = description;
  this.checkedIn = true;
}

//Movie object prototype functions
Movie.prototype = {
  status: function status() {
    if (this.checkedIn) {
      alert('This movie is currently available...');
      return this.checkOut();
    }

    alert('This movie is currently checked out...');
    return this.checkIn();
  }
  ,//this should check the checkedIn status of hte movie
  checkIn: function checkIn() {
    var rent = confirm('Do you want to return this movie?');
    if (rent) {
      this.checkedIn = true;
    }
  },//This function should check the movie in
  checkOut: function checkOut() {
    var rent = confirm('Do you want to check this movie out?');
    if (rent) {
      this.checkedIn = false;
    }
  },//This function should check the movie out
  shortDesc: function shortDesc() {
    return this.description.substring(0, 15) + '...';
  }//This function should return a 15 character
              // description of the movie
};

function objectAndElemnt() {
  var newMovieArr = [];
  for (var movie in movies) {
    var newMovie = new Movie(movies[movie][0], movies[movie][1], movies[movie][2], movies[movie][3], movies[movie][4]);
    newMovieArr.push(newMovie);
  }

  for (var movie in newMovieArr) {
    var li = e('li', '', {rel: newMovieArr[movie].description});
    var title = e('h3', newMovieArr[movie].title);
    var text = 'runtime: '
      + newMovieArr[movie].runTime
      + ' | genre: '
      + newMovieArr[movie].genre
      + ' | year released: '
      + newMovieArr[movie].yearReleased;
    var info = e('p', text);

    li.appendChild(title);
    li.appendChild(info);
    movieList.appendChild(li);
  }
}

//cycles through movies array and calls capitalize for each word in the titles
function capTheArray() {
  for (var i = 0; i < movies.length; i++) {
    var titleWords = movies[i][0].split(' ');
    for (var j = 0; j < titleWords.length; j++) {
      var noCap = ['of', 'the', 'and', 'for', 'in', 'to'];
      if (j !== 0 && noCap.indexOf(titleWords[j]) > -1) {
        continue;
      }

      titleWords[j] = capitalize(titleWords[j]);
    }

    titleWords = titleWords.join(' ');
    movies[i][0] = titleWords;
  }
}

//capitalizes first letter of a string
function capitalize(str) {
  if (!str || typeof str !== "string") {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

/*========================= execution space =============================*/

capTheArray();
objectAndElemnt();









