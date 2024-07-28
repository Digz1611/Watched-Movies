import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import './Home.css';
import Spinner from '../components/Spinner';
import MoviesTable from '../components/home/MoviesTable';
import MoviesCard from '../components/home/MoviesCard';
import { fetchMovies, logout } from '../api';
import { useSnackbar } from 'notistack';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        };
        checkAuthStatus();
        fetchMoviesData();
    }, []);

    const fetchMoviesData = async () => {
        setLoading(true);
        try {
            const response = await fetchMovies();
            setMovies(response.data.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
            enqueueSnackbar('Error fetching movies', { variant: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleAuthAction = () => {
        if (isLoggedIn) {
            logout();
            setIsLoggedIn(false);
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Watched Movies</h1>
                <button
                    className='bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg text-white'
                    onClick={handleAuthAction}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
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
                {isLoggedIn && (
                    <Link to='/movies/create'>
                        <MdOutlineAddBox className='text-sky-800 text-4xl' />
                    </Link>
                )}
            </div>

            {loading ? (
                <Spinner />
            ) : movies.length > 0 ? (
                showType === 'table' ? (
                    <MoviesTable movies={movies} isLoggedIn={isLoggedIn} />
                ) : showType === 'card' && !!isLoggedIn ? (
                    <MoviesCard movies={movies} isLoggedIn={isLoggedIn} />
                ) : <p>Please log in</p>
            ) : (
                <p>No movies found. {isLoggedIn && <Link to="/movies/create">Create one?</Link>}</p>
            )}
        </div>
    );
};

export default Home;