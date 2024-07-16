import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import './Home.css';
import Spinner from '../components/Spinner';
import MoviesTable from '../components/home/MoviesTable';
import MoviesCard from '../components/home/MoviesCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/movies')
      .then((response) => {
        setMovies(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Watched Movies</h1>
        <Link to='/login'>
          <button className='bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg'>
            Login
          </button>
        </Link>
      </div>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='text-3xl my-8'>Movies List</h2>
        <Link to='/movies/create'>
          <MdOutlineAddBox className='text-white-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <MoviesTable movies={movies} />
      ) : (
        <MoviesCard movies={movies} />
      )}
    </div>
  );
};

export default Home;
