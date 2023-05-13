import React, { useState } from 'react';
import SignPage from './SignPage';

const SignInPage = () => {
  const [state, setState] = useState({
    email_address: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const SignInHandler = () => {
    document.querySelector('.overlay').style.display = 'flex';
    document.querySelector('.signinoverlay').style.display = 'none';
      <SignPage />;
  };

  const handlelogin = (e) => {
    e.preventDefault();

    const { email_address, password } = state;
    if (email_address.length === 0 || password.length === 0) {
      onsubmit = false;
      setMessage('empty inputs');
    }
    //  else if (password !== confirm_password) {
    //   onsubmit = false;
    //   setMessage('password mismatch');
    // }
    // else {
    //   signupUser(state);
    // }
  };

  const closeHandle = () => {
    document.body.style.overflow = 'auto';
    document.querySelector('.signinoverlay').style.display = 'none';
  };

  return (
    <section className="signinoverlay">
      <div className="sign d-flex">
        <div className="sign-orange d-flex flex-column">
          <h1 className="fw-bold">Sign IN </h1>
          <form className="sign-form d-flex flex-column">

            <div className="mb-3">
              <input
                type="email"
                name="email_address"
                placeholder="Email Address "
                value={state.email_address}
                className="form-control"
                id="emailadd"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                placeholder="Password"
                type="password"
                name="password"
                className="form-control"
                id="passwords"
                value={state.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                onClick={handlelogin}
                className="btn custom-sign-btn text-white"
              >
                {' '}
                Sign IN
              </button>
              <button type="button" className="btn text-decoration-underline d-sm-none" onClick={SignInHandler}>or create new</button>
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
            <button type="button" className="btn">Forget Password?</button>
            {message === 'empty inputs' && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please fill out all required inputs</p>}
            {message === 'password mismatch' && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please make sure passwords match</p>}
          </div>
        </div>

        <div className="text-end cbg">
          <button type="button" className="btn-close" onClick={closeHandle} />
          <p className="d-none d-sm-block">
            Don’t have an account yet?
            <a href="." className="text-decoration-none">Create new for free!</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
