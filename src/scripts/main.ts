import { getRandomMovie } from "./get-random-movie.js";
import { handleMovieData } from "./movie-view.js";

const moviesAmount: number = 3000;
const searchMovieButton = document.querySelector('[data-button-search-movie]') as HTMLButtonElement;
searchMovieButton.addEventListener('click', async () => {
  const movie = await getRandomMovie(moviesAmount)
  handleMovieData(movie!)
});