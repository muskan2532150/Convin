import React from 'react';
// import Card from './Card';

const PostContainer = () => {
  // const Posts = useSelector((state) => state.posts);
  const LinkHandler = () => {
    console.log('checx');
  };

  return (
    <div className="mt-5">
      <ul className="d-flex list-unstyled">
        <li>
          <button className="btn" onClick={LinkHandler('All Posts')} type="button">All Posts</button>
        </li>
        <li>
          {' '}
          <button className="btn" onClick={LinkHandler('✍️ Article')} type="button">Article</button>
        </li>
        <li>
          <button className="btn" onClick={LinkHandler('🗓️ Meetup')} type="button">Event</button>
        </li>
        <li>
          {' '}
          <button className="btn" onClick={LinkHandler('🔬️ Education')} type="button">Education</button>
        </li>
        <li>
          {' '}
          <button className="btn" onClick={LinkHandler('💼️ Job')} type="button">Job</button>
        </li>
      </ul>
    </div>
  );
};

export default PostContainer;
