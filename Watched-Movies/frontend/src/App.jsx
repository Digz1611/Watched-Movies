// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovies from './pages/CreateMovies';
import ShowMovie from './pages/ShowMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';
import Login from './components/home/Login';
import Signup from './components/home/Signup';
import PrivateRoute from './components/PrivateRoute';

const App = () => {

  return (<Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/movies/create" element={<CreateMovies />} />
        <Route path='/movies/details/:id' element={<ShowMovie />} />
        <Route path='/movies/edit/:id' element={<EditMovie />} />
        <Route path='/movies/delete/:id' element={<DeleteMovie />} />
      </Route>
    </Routes>
  </Router>)
};

export default App;
