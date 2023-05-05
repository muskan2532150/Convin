import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';

const PostContainer = () => {
  const Posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const LinkHandler = (payload) => {
    if (payload !== 'All Posts') {
    }
  };

  return (
    <div className="mt-5">
      <ul className="d-flex list-unstyled">
        <li>
          <button className="btn" onClick={LinkHandler('All Posts')}>All Posts</button>
        </li>
        <li>
          {' '}
          <button className="btn" onClick={LinkHandler('✍️ Article')}>Article</button>
        </li>
        <li>
          <button className="btn" onClick={LinkHandler('🗓️ Meetup')}>Event</button>
        </li>
        <li>
          {' '}
          <button className="btn" onClick={LinkHandler('🔬️ Education')}>Education</button>
        </li>
        <li>
          {' '}
          <button className="btn" onClick={LinkHandler('💼️ Job')}>Job</button>
        </li>
      </ul>
    </div>
  );
};

export default PostContainer;
