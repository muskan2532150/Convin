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
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" 
            data-bs-target={`#${card.id}`}>See More </button>
              <div className="modal fade" id={card.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">{card.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <iframe src={card.url} allow="autoplay" ></iframe>
                    </div> 
                </div>
            </div>
        </div>
            <button type="button" className="btn btn-sm btn-danger ms-3" onClick={() => deleteHandler(card)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
