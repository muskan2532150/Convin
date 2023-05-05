import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterdata } from '../store/cardSlice';

const Posts = () => {
  const Posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const deleteHandler = (Posts) => {
    dispatch(filterdata(Posts.id));
  };

  return (
    <>
      {Posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-body">
            <img className="img-fluid" src={post.title_img} alt='' />
            <p>{post.type}</p>
            <h6 className="post-subtitle mb-2 text-body-secondary">{post.title}</h6>
            <p>{post.desc}</p>
            <div className='date'>
              <p>{post.date?post.date:''}</p>
              <p>{post.location?post.location:''}</p>
            </div>
            <div className="author">
            <img src={post.author_img} alt=''/>
            <h6>{post.author}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
