import React from 'react';
import { Card } from '../../Molecules';
import './CardSection.css';

function CardSection({ data }) {

  return (
    <>
      <div className="card-section">
        {data.results.map((cardData, index) => {
          return (
            <div key={index} className="card">
              <Card cardDetails={cardData} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardSection;
