import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Card.css';

const Card = ({ card }) => (
  <>
    {card.map((post) => (
      <div className="post" key={post.id}>
        <img className="img-fluid" src={post.title_img} alt="Title img" />
        <div className="post-body">
          <p className="type">{post.type}</p>
          <h6 className="mb-2 text-dark title">{post.title}</h6>
          {post.type === 'Job'
            ? (
              <p className="text-secondary">
                <i className="bi bi-square-fill" />
                {post.desc}
              </p>
            )
            : <p className="text-secondary">{post.desc}</p>}
          <div className="date d-flex justify-content-between">
            <p>
              {post.date
                ? (
                  <>
                    {' '}
                    <i className="bi bi-calendar-date-fill me-1" />
                    {' '}
                    {post.date}
                  </>
                )
                : ''}
            </p>
            <p>
              {post.location
                ? (
                  <>
                    <i className="bi bi-geo-alt-fill me-1" />
                    {' '}
                    {post.location}
                  </>
                )
                : ''}
            </p>
          </div>

          {(post.type === 'Meetup' || post.type === 'Job')
            ? (
              <div>
                <button type="button" className="btn meetup-btn mb-4">
                  <a href={post.url} className="text-decoration-none meetup-link">
                    {post.type === 'Meetup' ? 'Visit Website' : 'Apply on Timesjobs'}
                  </a>
                </button>
              </div>
            )
            : ''}

          <div className="d-flex justify-content-between align-items-center">
            <div className="author d-flex align-items-center gap-2">
              <img src={post.author_img} alt="author img" className="author-img rounded-circle" />
              <div className="">
                <h6 className="author mb-0">{post.author}</h6>
                <p className="views mb-0 text-start d-sm-none">1.4k views</p>
              </div>
            </div>
            <div className=" d-flex align-items-center">
              <p className="views mb-0 d-none d-sm-block">1.4k views</p>
              <button className="share btn d-flex gap-2" type="button">
                {' '}
                <i className="bi bi-share-fill" />
                <p className="d-sm-none m-0">Share</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

// Card.propTypes = {
//   card: PropTypes.shape,
// };

// Card.defaultProps = {
//   card: {},
// };

export default Card;
