// /* eslint-disable camelcase */
import '../assets/SignUp.css';
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    profile_pic: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    profile_pic: '',
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

  // Function to validate url format using regex
  const isValidURL = (url) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    // Validation rules
    if (formData.lname.trim() === '' || formData.fname.trim() === '') {
      newErrors.name = 'First/Last Name  is required.';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (formData.profile_pic.trim() === '') {
      newErrors.profile_pic = 'Profile url is required.';
      isValid = false;
    } else if (!isValidURL(formData.profile_pic)) {
      newErrors.profile_pic = 'Invalid profile url format.';
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
    <div className="container custom-signup">
      <h2 className="mb-4 signup-heading">Sign Up</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          <div className="d-flex mb-3 gap-1">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              className="form-control custom-font"
              id="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="form-control custom-font"
              id="lname"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>

          {errors.name && <div className="text-danger">{errors.name}</div>}

          <div className="mb-3">
            <input
              type="email"
              className="form-control custom-font"
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {errors.email && <div className="text-danger">{errors.email}</div>}

          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control custom-font"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {errors.password && <div className="text-danger">{errors.password}</div>}

          <div className="mb-3">
            <input
              type="text"
              name="profile_pic"
              placeholder="enter your profile image url"
              className="form-control custom-font"
              id="pic"
              value={formData.profile_pic}
              onChange={handleChange}
            />
          </div>
          {errors.profile_pic && <div className="text-danger">{errors.profile_pic}</div>}

          <button type="submit" className="btn btn-success custom-font">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
