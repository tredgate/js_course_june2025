/*
Cílem je vytvořit jednoduchý systém pro hodnocení filmů. 

Složka
src/exercises
Soubor
movie_rating.js

Filmy a hodnocení: Vytvořte dvě pole, jedno pro názvy filmů a druhé pro hodnocení. Hodnocení budou celá čísla od 1 do 10. Vyplňte alespoň 3 filmy:⌛4:56 
*/

const movies = ["Forest Gump", "Blbý a blbější", "Endergame"];
const movieRatings = [10, 3, 7];
const greatMovies = [];
const greatMoviesRatings = [];
const greatMovieMinRating = 8;

movies.forEach((movie, index) => {
  if (movieRatings[index] >= greatMovieMinRating) {
    greatMovies.push(movie);
    greatMoviesRatings.push(movieRatings[index]);
  }
});

console.log("---------------------");
console.log("⭐️ GREAT MOVIES:");
console.log("---------------------");
greatMovies.forEach((movie, index) => {
  console.log(`Name: ${movie} | Rating: ${greatMoviesRatings[index]}`);
});
/*
Vyhodnocení: Použijte cyklus for k procházení polí. Pro každý film zjistěte, zda stojí za to (hodnocení 8 a více) nebo ne. Dobré filmy zapište do nové array greateMovies a na konci vypište rozumně do konzole. ⌛7:58
*/
