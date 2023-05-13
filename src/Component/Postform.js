import React, { useState } from 'react';
import '../assets/Postform.css';

const Postform = () => {
  const [state, setState] = useState({
    aname: '',
    url: '',
    title: '',
    author_img: '',
    desc: '',
    location: '',
    date: '',
    title_img: '',
    type: '',
  });

  const handleChange = (e) => {
    setState((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };

  const handlelogin = () => {
    console.log('postform')
  }

  return (
    <section className='postform'>
      <form className="sign-form d-flex flex-column">
          <input
            type="text"
            placeholder="Author Name"
            name="aname"
            className="form-control"
            id="aname"
            value={state.aname}
            onChange={handleChange}
          />

          <input
            type="text"
            name="author_img"
            placeholder="enter author image url"
            className="form-control"
            id="author_img"
            value={state.author_img}
            onChange={handleChange}
          />
  
          <input
            type="text"
            name="title_img"
            placeholder="enter title image url"
            className="form-control"
            id="title_img"
            value={state.title_img}
            onChange={handleChange}
          />

          <input
            type="text"
            name="desc"
            placeholder="descrpition"
            className="form-control"
            id="desc"
            value={state.desc}
            onChange={handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="enter post url"
            className="form-control"
            id="url"
            value={state.url}
            onChange={handleChange}
          />

          <input
            type="text"
            name="title"
            placeholder="title"
            value={state.title}
            className="form-control"
            id="title"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            placeholder="date"
            value={state.date}
            className="form-control"
            id="date"
            onChange={handleChange}
          />

          <input
            placeholder="text"
            type="type"
            name="type"
            className="form-control"
            id="type"
            value={state.type}
            onChange={handleChange}
          />

          <input
            type="location"
            placeholder="location"
            name="location"
            className="form-control"
            id="location"
            value={state.location}
            onChange={handleChange}
          />
        <button
          type="submit"
          onClick={handlelogin}
          className="btn custom-sign-btn text-white my-2"
        >
          {' '}
          Create Post
        </button>
      </form>

    </section>
  );
};

export default Postform;
