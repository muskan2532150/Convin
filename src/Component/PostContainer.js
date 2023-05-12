import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import '../assets/PostContainer.css';

const PostContainer = () => {
  const fetchPosts = useSelector((state) => state.posts);
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      updatePosts(fetchPosts);
    }
  }, [fetchPosts]);

  const LinkHandler = (typeData) => {
    if (typeData === 'All Posts') {
      updatePosts([...fetchPosts]);
    } else {
      updatePosts(() => fetchPosts.filter((each) => each.type === typeData));
    }
  };

  const SelectHandler = () => {
    const { value } = document.querySelector('#select');
    LinkHandler(value);
  };

  return (
    <div className="main-section">
      <div className="main-img">
        <div className="d-flex justify-content-between pt-4 px-2 ">
          <button type="button" className="btn"><i className="bi bi-arrow-left" /></button>
          <button className="btn btn-outline-dark text-white" type="button">Join Group</button>
        </div>
        <div className="main-body">
          <h4>Computer Engineering</h4>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center pe-3 align-items-center">
          <ul className="d-sm-flex d-none list-unstyled">
            <li>
              <button className="btn li-btn" onClick={() => LinkHandler('All Posts')} type="button">All Posts</button>
            </li>
            <li>
              {' '}
              <button className="btn li-btn" onClick={() => { LinkHandler('Article'); }} type="button">Article</button>
            </li>
            <li>
              <button className="btn li-btn" onClick={() => LinkHandler('Meetup')} type="button">Event</button>
            </li>
            <li>
              {' '}
              <button className="btn li-btn" onClick={() => LinkHandler('Education')} type="button">Education</button>
            </li>
            <li>
              {' '}
              <button className="btn li-btn" onClick={() => LinkHandler('Job')} type="button">Job</button>
            </li>
          </ul>
          <div className="d-sm-none d-flex mb-3 justify-content-between align-items-center w-100">
            <p className="selectp fw-600 m-0">Posts</p>
            <select onChange={() => SelectHandler()} id="select" className="form-select form-select-lg ">
              <option value="All Posts">All Posts </option>
              <option value="Article">Article</option>
              <option value="Education">Education</option>
              <option value="Job">Job</option>
              <option value="Meetup">Meetup</option>
            </select>
          </div>

          <div className="d-none d-sm-flex gap-3">
            <button className="bdcolor btn" type="button">Write a Post</button>
            <button className="btn bordrx btn bordercolor" type="button">Join Group</button>
          </div>
        </div>
        <Card card={posts} />
      </div>
    </div>
  );
};

export default PostContainer;
