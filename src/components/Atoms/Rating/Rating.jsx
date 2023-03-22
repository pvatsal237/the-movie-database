import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './Rating.css';

function Rating({ data }) {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {data.vote_average >= index + 1 ? (
          <FaStar className="star" />
        ) : data.vote_average >= number ? (
          <FaStarHalfAlt className="star" />
        ) : (
          <AiOutlineStar className="star" />
        )}
      </span>
    );
  });

  return (
    <div className="rating">
      {ratingStar}

      {/* <div className="star">
        <FaStar size={20} />
      </div>
      <div className="star">
        <FaStar size={20} />
      </div>

      <div className="star">
        <FaStar size={20} />
      </div>

      <div className="star">
        <FaStar size={20} />
      </div>

      <div className="star">
        <FaStar size={20} /> */}
      {/* </div> */}
    </div>
  );
}

export default Rating;
