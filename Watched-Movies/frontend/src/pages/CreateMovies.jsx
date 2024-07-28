import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { createMovie } from '../api';

const CreateMovies = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveMovie = async () => {
    const data = {
      title,
      director,
      releaseDate,
      review,

    };
    setLoading(true);
    try {
      await createMovie(data);
      setLoading(false);
      enqueueSnackbar('Movie Created successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      console.error('Error creating movie:', error.response || error);
      enqueueSnackbar(`Error creating movie: ${error.response?.data?.message || error.message}`, { variant: 'error' });
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Movie</h1>
      {loading && <Spinner />}
      <div className='flex flex-col border-2 border-white-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Director</label>
          <input
            type='text'
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Release Date</label>
          <input
            type='number'
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Review (1-10)</label>
          <input
            type='number'
            value={review}
            onChange={(e) => {
              let value = e.target.value;
              if (value === "") {
                setReview("");
                return;
              }
              value = Number(value);
              if (value < 1) value = 1;
              if (value > 10) value = 10;
              setReview(value);
            }}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            min='1'
            max='10'
          />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveMovie}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateMovies;