import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing errors
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("Response:", data);
      const { success, message } = data;
      if (success) {
        navigate("/");
      } else {
        setError(message);
      }
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred");
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
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
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





// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = inputValue;
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-left",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/login",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
//       console.log(data);
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//     });
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
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         {/* <Link to ={'/'}> */}
//         <button type="submit">Submit</button>
//         {/* </Link> */}
//         <span>
//           Don't have an account? <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
