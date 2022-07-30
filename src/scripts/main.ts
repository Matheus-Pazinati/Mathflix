import { getRandomMovie } from "./get-random-movie.js";
import { randomIntFromNumbers } from "./get-random-number.js";
import { handleMovieData } from "./movie-view.js";

const moviesListLength: number = 3000;
const searchMovieButton = document.querySelector('[data-button-search-movie]') as HTMLButtonElement;
searchMovieButton.addEventListener('click', async () => {
  const movie = await getRandomMovie(randomIntFromNumbers(moviesListLength))
  handleMovieData(movie)
});