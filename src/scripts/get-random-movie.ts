import {
  API_KEY, BASE_URL,
  language,
} from './api-keys.js';
import { randomIntFromNumbers } from './get-random-number.js';

type Genre = {
  id: number,
  name: string
}

export interface MovieProps {
  genres: Genre[],
  title: string,
  poster_path: string,
  overview: string
}

async function getMovie(id: number) {
  const movie = await fetch(`${BASE_URL}${id}?${API_KEY}&${language}`)
  const movieFound = await movie.json()
  return movieFound as MovieProps
}

export async function getRandomMovie(moviesAmount: number) {
  let isMovieInvalid = true;
  let movie;
  while (isMovieInvalid) {
    movie = await getMovie(randomIntFromNumbers(moviesAmount));
    const isMovieWithTitle = movie.title !== undefined && movie.title !== ""
    const isMovieWithOverview = movie.overview !== undefined && movie.overview !== ""
    if (isMovieWithTitle && isMovieWithOverview) {
      isMovieInvalid = false;
      return movie;
    } 
  }
  return
}