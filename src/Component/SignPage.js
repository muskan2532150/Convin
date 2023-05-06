/* eslint-disable camelcase */
import React, { useState } from 'react';
import '../assets/SignPage.css';
// import { Link } from 'react-router-dom';
// import { signupUser } from '../auth/Auth';

const SignPage = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    email_address: '',
    phone_number: '',
    password: '',
    profile_pic: '',
    confirm_password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlelogin = (e) => {
    e.preventDefault();

    const {
      lname, email_address, phone_number, password, confirm_password, fname,
    } = state;
    if (lname.length === 0 || email_address.length === 0 || fname.length === 0
      || phone_number.length === 0
      || password.length === 0 || confirm_password.length === 0) {
      onsubmit = false;
      setMessage('empty inputs');
    } else if (password !== confirm_password) {
      onsubmit = false;
      setMessage('password mismatch');
    }
    // else {
    //   signupUser(state);
    // }
  };

  return (
    <section className='overlay'>
    <div className="sign d-flex">
      <div className="sign-orange d-flex flex-column">
        <h1 className="fw-bold">Create Account </h1>
        <form className="sign-form d-flex flex-column">

          <div className="mb-3 d-flex">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              className="form-control"
              id="fname"
              value={state.fname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="form-control"
              id="lname"
              value={state.lname}
              onChange={handleChange}
            />
          </div>

          {/* <div className="mb-3">
            <input
              type="text"
              name="profile_pic"
              placeholder="enter your profile image url"
              className="form-control"
              id="pic"
              value={state.profile_pic}
              onChange={handleChange}
            />
          </div> */}

          <div className="mb-3">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address "
              value={state.email_address}
              className="form-control"
              id="email"
              onChange={handleChange}
            />
          </div>

          {/* <div className="mb-3">
            <input
              type="tel"
              name="phone_number"
              value={state.phone_number}
              className="form-control"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter your Phone number"
              minLength="9"
              maxLength="10"
              required
              id="phone"
              onChange={handleChange}
            />
          </div> */}

          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              className="form-control"
              id="confirm-password"
              value={state.confirm_password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            onClick={handlelogin}
            className="btn custom-sign-btn text-white"
          >
            {' '}
            Create Account
          </button>
        </form>
        <div className="mt-1">
          <button className="fw-semibold btn cborder w-100 mb-2" type="button">
            <img src="./images/google .png" alt="google" className="me-2" />
            {' '}
            Sign in with Google
            {' '}
          </button>
          <button className="fw-semibold btn cborder w-100" type="button">
            <img src="./images/fb.png" alt="facebook" className="me-2" />
            Sign in with Facebook
            {' '}
          </button>
          {message === 'empty inputs' && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please fill out all required inputs</p>}
          {message === 'password mismatch' && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please make sure passwords match</p>}
        </div>
      </div>

      <div className="text-end cbg">
        <p>
          Already have an account?
          <a href="#" className="text-decoration-none">Sign In</a>
        </p>
        <img src="./images/signpage.png" alt="sign page" />
        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
      </div>
    </div>
    </section>
  );
};

export default SignPage;
