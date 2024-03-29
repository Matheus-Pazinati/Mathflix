import { IMG_URL } from './api-keys.js'
import { MovieProps } from './get-random-movie.js'

export function handleMovieData(movie: MovieProps) {
  const movieContainer = document.querySelector('[data-movie-container]') as HTMLElement;
  const moviePoster = document.querySelector('[data-movie-poster]') as HTMLImageElement;
  const movieTitle = document.querySelector('[data-movie-title]') as HTMLElement;
  const movieGenre = document.querySelector('[data-movie-genre]') as HTMLElement;
  const movieSynopsis = document.querySelector('[data-movie-synopsis]') as HTMLElement;

  movieContainer.classList.remove('closed');

  moviePoster.src = IMG_URL+movie?.poster_path;
  moviePoster.alt = `Cartaz do filme ${movie?.title}`;
  movieTitle.textContent = movie?.title;
  movieGenre.textContent = movie?.genres[0].name;
  movieSynopsis.textContent = movie?.overview;
  console.clear()
}