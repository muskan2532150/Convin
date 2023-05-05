import React from 'react';
import '../assets/Card.css';

const Card = ({ card }) => (
  <>
    {card.map((post) => (
      <div className="post" key={post.id}>
        <img className="img-fluid" src={post.title_img} alt="" />
        <div className="post-body">
          <p className="type">{post.type}</p>
          <h6 className="mb-2 text-dark title">{post.title}</h6>
          <p className="text-secondary">{post.desc}</p>
          <div className="date d-flex justify-content-between">
            <p>{post.date ? post.date : ''}</p>
            <p>{post.location ? post.location : ''}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="author d-flex align-items-center">
              <img src={post.author_img} alt="" />
              <h6 className="author mb-0">{post.author}</h6>
            </div>
            <div className=" d-flex align-items-center">
              <p className="views mb-0">1.4k views</p>
              <button className="share btn">Share</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Card;
