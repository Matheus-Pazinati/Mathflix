type Genre = {
  id: number,
  name: string
}

type MovieData = {
  genres: Genre[],
  title: string,
  poster_path: string,
  overview: string
}

export function handleMovieData(movie: MovieData) {
  console.log(movie.genres[0].name, movie.title, movie.poster_path, movie.overview)
}