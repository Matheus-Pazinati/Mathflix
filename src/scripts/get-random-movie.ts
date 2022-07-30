import {
  API_KEY, BASE_URL,
  language,
} from './api-keys.js';
import { randomIntFromNumbers } from './get-random-number.js';

async function getMovie(id: number) {
  const movie = await fetch(`${BASE_URL}${id}?${API_KEY}&${language}`)
  const movieFound = await movie.json()
  return movieFound
}

export async function getRandomMovie(id: number) {
  let movieNotFound: boolean = true;
  let movie = await getMovie(id)
  while (movieNotFound) {
    if (movie.title !== undefined) {
      movieNotFound = false;
      console.log(movie);
      console.log(movie.title)
      return movie;
    } 
    movie = await getMovie(randomIntFromNumbers(id));
  }
}