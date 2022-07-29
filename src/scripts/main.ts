import { getRandomMovie } from "./get-random-movie.js";
import { randomIntFromNumbers } from "./get-random-number.js";

const searchMovieButton = document.querySelector('[data-button-search-movie]') as HTMLButtonElement;
searchMovieButton.addEventListener('click', () => {
  getRandomMovie(randomIntFromNumbers(1500));
});