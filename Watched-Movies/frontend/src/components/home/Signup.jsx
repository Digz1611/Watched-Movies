// src/components/home/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from '../../api';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
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
      const response = await signup(inputValue);
      if (response.data.success) {
        navigate("/login");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.response?.data?.message || "An error occurred during signup");
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={inputValue.username}
            placeholder="Enter your username"
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
