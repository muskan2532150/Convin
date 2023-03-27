import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = () => {
    const cards = useSelector((state) => state.card);
    return (
        <>
            {cards.map((card,index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title text-body-secondary"> {card.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{card.video}</h6>
                        <Link to={card.url} className="card-link">Card link</Link>
                        <a href="#" className="card-link">Delete</a>
                    </div>
                </div>))}
        </>
    )
}

export default Card