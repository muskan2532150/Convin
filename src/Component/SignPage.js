/* eslint-disable camelcase */
import React, { useState } from 'react';
import '../assets/SignPage.css';
import SignInPage from './SignInPage';


const SignPage = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    email_address: '',
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
      lname, email_address, password, confirm_password, fname,
    } = state;
    if (lname.length === 0 || email_address.length === 0 || fname.length === 0
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

 const SignHandler = () => {
  document.querySelector('.overlay').style.display = ' none';
  document.querySelector('.signinoverlay').style.display = 'flex';
  console.log('jjj'); 
  <SignInPage />
 }

  const closeHandle = () => {
    document.body.style.overflow = 'auto';
    document.querySelector('.overlay').style.display = 'none';
  };

  return (
    <section className="overlay">
      <div className="sign d-flex">
        <div className="">
          <div className="d-flex justify-content-between">
            <h1 className="fw-bold">Create Account </h1>
            <button type="button" className="btn-close d-sm-none" onClick={closeHandle} />
          </div>
          <form className="sign-form d-flex flex-column">
            <div className="d-flex">
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

            <div className="">
              <input
                type="text"
                name="profile_pic"
                placeholder="enter your profile image url"
                className="form-control"
                id="pic"
                value={state.profile_pic}
                onChange={handleChange}
              />
            </div>

            <div className="">
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

            <div className="">
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

            <div className="">
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

      <div className=''>
            <button
              type="submit"
              onClick={handlelogin}
              className="btn custom-sign-btn text-white my-2"
            >
              {' '}
              Create Account
            </button>
            <button type="button" className="btn text-decoration-underline d-sm-none" onClick={SignHandler}>or signin</button>
</div>
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

            <p className="text-center d-sm-none d-block m-0 mt-3 text-secondary">By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>

        <div className="text-end cbg d-none d-sm-block">
          <button type="button" className="btn-close float-end" onClick={closeHandle} />
          <p className="mt-2">
            Already have an account?
            <a href="." className="text-decoration-none">Sign In</a>
          </p>
          <img src="./images/signpage.png" alt="signPageImage" />
          <p className="d-flex align-items-end ps-2">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </section>
  );
};

export default SignPage;
