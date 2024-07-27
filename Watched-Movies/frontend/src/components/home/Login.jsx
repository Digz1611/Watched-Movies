
// // src/components/home/Login.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await axios.post("http://localhost:4000/login", inputValue, {
//         withCredentials: true
//       });
//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         navigate("/");
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.response?.data?.message || "An error occurred during login");
//     }
//   };

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={inputValue.email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={inputValue.password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         {error && <div className="error_msg">{error}</div>}
//         <button type="submit">Submit</button>
//         <span>
//           Don't have an account? <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../api';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",                                                                                  
    password: "",
  });                                          
  const [error, setError] = useState("");                                                                         


  const handleOnChange = (e) => {
    const { name, value } = e.target;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await login(inputValue);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        {error && <div className="error_msg">{error}</div>}
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;