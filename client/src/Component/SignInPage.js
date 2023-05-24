import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  // Function to validate email format using regex
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    // Validation rules

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
    } else {
      // Here, you can add the logic to submit the form data to your backend or perform any other actions.
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container custom-background">
      <h2 className="mb-4 signup-heading">Sign Up</h2>
      <div className="form-container signin-pad" noValidate>
        <form className="sign-form d-flex flex-column">

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address "
              value={formData.email}
              className="form-control custom-font"
              id="emailadd"
              onChange={handleChange}
            />
          </div>
          {errors.email && <div className="text-danger">{errors.email}</div>}

          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="form-control custom-font"
              id="passwords"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <div className="text-danger">{errors.password}</div>}

          <div className="d-flex flex-column gap-2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary custom-font"
            >
              {' '}
              Sign IN
            </button>
            <button type="button" className="btn btn-primary custom-font"><Link to="/signup" className="text-decoration-none text-white">create new</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
