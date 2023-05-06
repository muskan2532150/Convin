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
  console.log(posts);
  const LinkHandler = (typeData) => {
    if (typeData === 'All Posts') {
      updatePosts([...fetchPosts]);
    } else {
      updatePosts(() => fetchPosts.filter((each) => each.type === typeData));
    }
  };

  return (
    <div className="main-section">
      <div className="main-img">
        <div className="d-flex justify-content-between pt-4 ">
          <button type="button">Arrow</button>
          <button className="btn btn-outline-dark text-white" type="button">Join Group</button>
        </div>
        <div className="main-body">
          <h4>Computer Engineering</h4>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="p-4">
        <div className="d-flex justify-content-between pe-3 align-items-center">
          <ul className="d-flex list-unstyled">
            <li>
              <button className="btn" onClick={() => LinkHandler('All Posts')} type="button">All Posts</button>
            </li>
            <li>
              {' '}
              <button className="btn" onClick={() => { LinkHandler('Article'); }} type="button">Article</button>
            </li>
            <li>
              <button className="btn" onClick={() => LinkHandler('Meetup')} type="button">Event</button>
            </li>
            <li>
              {' '}
              <button className="btn" onClick={() => LinkHandler('Education')} type="button">Education</button>
            </li>
            <li>
              {' '}
              <button className="btn" onClick={() => LinkHandler('Job')} type="button">Job</button>
            </li>
          </ul>
          <div className="d-flex gap-3">
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
