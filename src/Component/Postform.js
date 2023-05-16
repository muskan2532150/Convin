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
    console.log(state);
    dispatch(appenddata(state));
    navigate('/');
  };

  return (
    <section className="postform">
      <h3>Post Form</h3>
      <form className="sign-form d-flex flex-column">
        <div className="input-group input-group-lg">
          <input
            type="text"
            placeholder="Author Name"
            name="author"
            className="form-control mb-sm-3"
            id="author"
            value={state.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            type="text"
            name="author_img"
            placeholder="enter author image url"
            className="form-control mb-sm-3"
            id="author_img"
            value={state.author_img}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            type="text"
            name="title_img"
            placeholder="enter title image url"
            className="form-control mb-sm-3"
            id="title_img"
            value={state.title_img}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            type="text"
            name="desc"
            placeholder="descrpition"
            className="form-control mb-sm-3"
            id="desc"
            value={state.desc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            type="text"
            name="url"
            placeholder="enter post url"
            className="form-control mb-sm-3"
            id="url"
            value={state.url}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={state.title}
            className="form-control mb-sm-3"
            id="title"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            type="date"
            name="date"
            placeholder="date"
            value={state.date}
            className="form-control mb-sm-3"
            id="date"
            onChange={handleChange}
          />
        </div>

        <div className="input-group input-group-lg">
          <input
            placeholder="text"
            type="type"
            name="type"
            className="form-control mb-sm-3"
            id="type"
            value={state.type}
            onChange={handleChange}
            required
          />
        </div>

        {/* <select class="form-select" id="floatingSelect" a
        ria-label="Floating label select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
        </select> */}

        <div className="input-group input-group-lg">
          <input
            type="location"
            placeholder="location"
            name="location"
            className="form-control mb-sm-3"
            id="location"
            value={state.location}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          onClick={handlelogin}
          className="btn custom-sign-btn text-white my-2 form-btn"
        >
          {' '}
          Create Post
        </button>
      </form>

    </section>
  );
};

export default Postform;
