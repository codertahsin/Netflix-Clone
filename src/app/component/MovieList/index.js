import { useEffect, useState, } from 'react'
import MovieCard from './MovieCard'

 function MovieList({ title, filter,  carousel=false }) {
  const [movies, setMovies,] = useState([]);

  const getMovies = async () =>{
   const response = await fetch(`https://yts.mx/api/v2/list_movies.json${filter}`).then(res => res.json());
   setMovies(response.data.movies);
  }

useEffect(() => {
  getMovies();
}, []);

return (
  <div className='my-12'>
    <h1 className='text-gray-100 text-3xl font-medium'>{title}</h1>
    <div className='my-7 flex item-start justify-between flex-wrap'>
      {movies?.map(movie => (
        <MovieCard movie={movie} {...movie} key={movie?.id}/>
      ))}
      
    </div>
  </div>
)
}
export default MovieList