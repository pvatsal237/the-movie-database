import React, { useState } from 'react';
import { Rating, Title, Paragraph } from '../../Atoms';
import './Card.css';
import { Modal } from '../../Molecules';

function Card({ cardDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* <a href={cardDetails.urls.full}></a> */}
      <div className="indi-card" onClick={() => setIsOpen(true)}>
        <div className="card-top">
          {cardDetails.backdrop_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w342/${cardDetails.poster_path}`}
            />
          ) : (
            <img
              src={`https://movies.fidalgo.dev/static/media/nothing.4c58037b.svg`}
            />
          )}
        </div>
        <div className="card-bottom">
          <div className="paragraph">
            <Paragraph text={cardDetails.title} />
          </div>
          <div className="rating">
            <Rating data={cardDetails} />
          </div>
        </div>
      </div>
      <Modal
        open={isOpen}
        data={cardDetails}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

export default Card;
