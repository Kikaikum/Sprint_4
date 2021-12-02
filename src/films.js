// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(function(movie){
    return movie.director;
  });
  
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let results= array.filter((movie) => movie.director==director);  
  return results;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  let result= array.filter(function(movie){
    if(movie.director==director||movie.genre==director){
      return movie;
    }
  })
  .map((movie)=>movie.score)
  .reduce(function(previous, current) {
    if(current>0){
      return (previous + current)/2}
    else{
      return previous} 
    })
 
  result=Math.round(result*100)/100;
  
  return result;

  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result= array.map((movie=>movie.title)).sort().slice(0,20)
  return result;
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
