// src/components/home/MoviesCard.jsx
import MovieSingleCard from './MovieSingleCard';

const MoviesCard = ({ movies, isLoggedIn }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {movies.map((item) => (
        <MovieSingleCard key={item._id} movie={item} isLoggedIn={isLoggedIn} />
      ))}
    </div>
  );
};

export default MoviesCard;
