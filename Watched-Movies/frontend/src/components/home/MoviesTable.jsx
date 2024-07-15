import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const MoviesTable = ({ movies }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>

      <thead>
        <tr>
          <th className='border border-white-600 rounded-md'>No</th>
          <th className='border border-white-600 rounded-md'>Title</th>
          <th className='border border-white-600 rounded-md max-md:hidden'>Director</th>
          <th className='border border-white-600 rounded-md max-md:hidden'>Release Date</th>
          <th className='border border-white-600 rounded-md max-md:hidden'>Review</th>
          <th className='border border-white-600 rounded-md'>Operations</th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie, index) => (
          <tr key={movie._id} className='h-8'>

            <td className='border border-white-700 rounded-md text-center'>
              {index + 1}
            </td>

            <td className='border border-white-700 rounded-md text-center'>
              {movie.title}
            </td>

            <td className='border border-white-700 rounded-md text-center max-md:hidden'>
              {movie.director}
            </td>

            <td className='border border-white-700 rounded-md text-center max-md:hidden'>
              {movie.releaseDate}
            </td>

            <td className='border border-white-700 rounded-md text-center max-md:hidden'>
              {movie.review}/10
            </td>

            <td className='border border-white-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/movies/details/${movie._id}`}>
                  <BsInfoCircle className='text-2xl text-green-600' />
                </Link>
                <Link to={`/movies/edit/${movie._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-300' />
                </Link>
                <Link to={`/movies/delete/${movie._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-500' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default MoviesTable;
