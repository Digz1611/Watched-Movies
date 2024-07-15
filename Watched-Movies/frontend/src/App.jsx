import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovies from './pages/CreateMovies';
import ShowMovie from './pages/ShowMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';
import Login from './components/home/Login';
import Signup from './components/home/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/create' element={<CreateMovies />} />
      <Route path='/movies/details/:id' element={<ShowMovie />} />
      <Route path='/movies/edit/:id' element={<EditMovie />} />
      <Route path='/movies/delete/:id' element={<DeleteMovie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import HomeR from './components/home/HomeR';
// import CreateMovies from './pages/CreateMovies';
// import ShowMovie from './pages/ShowMovie';
// import EditMovie from './pages/EditMovie';
// import DeleteMovie from './pages/DeleteMovie';
// import Login from './components/home/Login';

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/auth' element={<HomeR />} />
//       <Route path='/movies/create' element={<CreateMovies />} />
//       <Route path='/movies/details/:id' element={<ShowMovie />} />
//       <Route path='/movies/edit/:id' element={<EditMovie />} />
//       <Route path='/movies/delete/:id' element={<DeleteMovie />} />
//       <Route path="/auth/login" element={<Login />} />
//     </Routes>
//   );
// };

// export default App;


// import React from 'react';

// function App() {
//   return <h1>Hello, World!</h1>;
// }

// export default App: