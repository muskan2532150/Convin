import React, { useState } from 'react';
import '../assets/SignPage.css';

const SignPage = () => {
  const [inputs, setInputs] = useState({
    fname: '', lname: '', password: '', email: '', cpassword: '',
  });

  const inputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Account</h1>
              <p>Already have an account? Sign In</p>
            </div>
            <div className="modal-body">
              <form className="new-form">
                <div className="mb-3">
                  <input
                    type="name"
                    name="fname"
                    className="form-control form-control-lg"
                    onChange={inputHandler}
                    value={inputs.fname}
                    id="fname"
                    aria-describedby="nameHelp"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="name"
                    name="lname"
                    className="form-control form-control-lg"
                    onChange={inputHandler}
                    value={inputs.lname}
                    id="lname"
                    aria-describedby="nameHelp"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    id="exampleInputEmail"
                    onChange={inputHandler}
                    placeholder="example.com"
                    value={inputs.email}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword"
                    onChange={inputHandler}
                    placeholder="Password"
                    value={inputs.password}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="cpassword"
                    className="form-control form-control-lg"
                    id="exampleInputcPassword"
                    onChange={inputHandler}
                    placeholder="Password"
                    value={inputs.cpassword}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
              </form>
            </div>
            <div className="modal-footer">
              <div className="d-flex flex-column">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign up with Facebook</button>
                <button type="button" className="btn btn-primary">Sign up with Google</button>
              </div>
              <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SignPage;
