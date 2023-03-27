import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterdata } from '../store/cardSlice';

const Card = () => {
  const cards = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const deleteHandler = (card) => {
    dispatch(filterdata(card.id));
  };

  return (
    <>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title text-body-secondary">
              {' '}
              {card.name}
            </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{card.video}</h6>
            <Link to={card.url} className="card-link">Card link</Link>
            <button type="button" className="btn btn-sm btn-danger ms-3" onClick={() => deleteHandler(card)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
