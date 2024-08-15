import React, { useState } from 'react';
import './StudentSignIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentSignIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = 'Email is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const { email, password } = loginData;
    try {
      const response = await axios.get('http://localhost:8080/api/auth');
      const userExist = response.data.some(
        (data) => data.email === email && data.password === password
      );
      if (userExist) {
        alert('Login successful');
        navigate('/AboutUs');
      } else {
        alert('User Not Found');
      }
    } catch (error) {
      console.error('Error fetching users', error);
      alert('Error logging in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Student Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <InputField
            label="Email"
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            error={errors.password}
          />
          <SubmitButton isLoading={isLoading} />
          <p>
            Don't have an account? <a href="/StudentSignup">Create one here</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, type, name, value, onChange, error }) => (
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
    {error && <span className="error-text">{error}</span>}
  </div>
);

const SubmitButton = ({ isLoading }) => (
  <button type="submit" className="login-btn" disabled={isLoading}>
    {isLoading ? 'Logging in...' : 'Login'}
  </button>
);
export default StudentSignIn;