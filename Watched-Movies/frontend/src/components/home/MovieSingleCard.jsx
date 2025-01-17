// src/components/home/MovieSingleCard.jsx
import { Link } from 'react-router-dom';
import { PiFilmSlateLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { CiStar } from "react-icons/ci";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import MovieModal from './MovieModal';

const MovieSingleCard = ({ movie, isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-white-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl bg-white'>
      {isLoggedIn && (
        <>
          <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
            {`yr - ${movie.releaseDate}`}
          </h2>
          <h4 className='my-2 text-white-500'>{movie._id}</h4>

          <div className='flex justify-start items-center gap-x-2'>
            <PiFilmSlateLight className='text-red-300 text-2xl' />
            <h2 className='my-1'>{movie.title}</h2>
          </div>

          <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl' />
            <h2 className='my-1'>{movie.director}</h2>
          </div>

          <div className='flex justify-start items-center gap-x-2'>
            <CiStar className='text-red-300 text-2xl' />
            <h2 className='my-1'>{movie.review}/10</h2>
          </div>

          <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <Link to={`/movies/details/${movie._id}`}>
              <BsInfoCircle className='text-2xl text-green-500 hover:text-black' />
            </Link>
            <Link to={`/movies/edit/${movie._id}`}>
              <AiOutlineEdit className='text-2xl text-yellow-300 hover:text-black' />
            </Link>
            <Link to={`/movies/delete/${movie._id}`}>
              <MdOutlineDelete className='text-2xl text-red-500 hover:text-black' />
            </Link>
          </div>

          {showModal && (
            <MovieModal movie={movie} onClose={() => setShowModal(false)} />
          )}
        </>
      )}
    </div>

  );
};

export default MovieSingleCard;
