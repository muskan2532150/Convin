import React, { useState } from 'react';
import '../assets/Postform.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { appenddata } from '../store/cardSlice';

const Postform = () => {
  const [state, setState] = useState({
    id: 5,
    author: '',
    url: '',
    title: '',
    author_img: '',
    desc: '',
    location: '',
    date: '',
    title_img: '',
    type: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };

  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(appenddata(state));
    navigate('/');
  };

  return (
    <section className="container postform custom-background">
      <div className="form-container">
        <form className="sign-form d-flex flex-column">
          <h3 className="mb-4 text-center">Post Form</h3>
          <div className="mb-3 ">
            <input
              type="text"
              placeholder="Author Name"
              name="author"
              className="form-control mb-sm-3 custom-font"
              id="author"
              value={state.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 ">
            <input
              type="text"
              name="author_img"
              placeholder="enter author image url"
              className="form-control mb-sm-3 custom-font"
              id="author_img"
              value={state.author_img}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title_img"
              placeholder="enter title image url"
              className="form-control mb-sm-3 custom-font"
              id="title_img"
              value={state.title_img}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="desc"
              placeholder="descrpition"
              className="form-control mb-sm-3 custom-font"
              id="desc"
              value={state.desc}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="url"
              placeholder="enter post url"
              className="form-control mb-sm-3 custom-font"
              id="url"
              value={state.url}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title"
              placeholder="title"
              value={state.title}
              className="form-control mb-sm-3 custom-font"
              id="title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="date"
              name="date"
              placeholder="date"
              value={state.date}
              className="form-control mb-sm-3 custom-font"
              id="date"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              placeholder="text"
              type="type"
              name="type"
              className="form-control mb-sm-3 custom-font"
              id="type"
              value={state.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="location"
              placeholder="location"
              name="location"
              className="form-control mb-sm-3 custom-font"
              id="location"
              value={state.location}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            onClick={handlelogin}
            className="btn btn-secondary text-white my-2 p-2 custom-font"
          >
            {' '}
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default Postform;
