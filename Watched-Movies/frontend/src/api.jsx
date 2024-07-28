import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5555',
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});
export const fetchMovies = () => {
    const userId = localStorage.getItem('id');
    return API.get(`/movies/user/${userId}`)
};
export const createMovie = (movieData) => {
    const userId = localStorage.getItem('id');
    return API.post('/movies', { ...movieData, userId })
};
export const getMovie = (id) => API.get(`/movies/${id}`);
export const updateMovie = (id, updatedMovie) => API.put(`/movies/${id}`, updatedMovie);
export const deleteMovie = (id) => API.delete(`/movies/${id}`);

export const login = (credentials) => axios.post('http://localhost:4000/login', credentials, { withCredentials: true });
export const signup = (userData) => axios.post('http://localhost:4000/signup', userData, { withCredentials: true });
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    return Promise.resolve();
};