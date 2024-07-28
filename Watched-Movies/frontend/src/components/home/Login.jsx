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
        localStorage.setItem("id", response.data._id);
        console.log(response.data);
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
    <div className="login_container">
    <div className="auth_container">
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
        <br />
        <br />
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
    </div>
  );
};

export default Login;