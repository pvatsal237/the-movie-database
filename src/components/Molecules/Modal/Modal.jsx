import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Paragraph, Rating, Title } from '../../Atoms';
import './Modal.css';

function Modal({ open, onClose, data }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setCast(data);
      });
  }, []);

  // console.log(cast)

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-img">
          {
            <div className="image">
              {data.backdrop_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                />
              ) : (
                <img
                  src={`https://movies.fidalgo.dev/static/media/nothing.4c58037b.svg`}
                />
              )}
            </div>
          }
        </div>
        <div className="info">
          <div className="modal-title">
            <Title text={data.title} size="h1" />
          </div>
          <div className="lang-rating">
            <div className="modal-rating">
              <Rating data={data} />
            </div>
            <div className="language">
              {data.original_language === 'en' ? (
                <Paragraph text={'ENGLISH'} />
              ) : data.original_language === 'pt' ? (
                <Paragraph text={'PORTUGUESE'} />
              ) : data.original_language === 'hi' ? (
                <Paragraph text={'HINDI'} />
              ) : (
                <Paragraph text={'GERMAN'} />
              )}
            </div>
          </div>
          <div className="subtitle">
            <Title text={'THE GENRES'} size="h3" />
          </div>
          <div className="subtitle">
            <Title text={'THE SYNOPSIS'} size="h3" />
          </div>
          <div className="paragraph-indi">
            <Paragraph text={data.overview} />
          </div>
          {/* <div className="cast">
            {cast.cast.map((ele, index) => (
              <Paragraph key={index} text={ele.name} />
            ))}
          </div> */}
          <div className="people">
            {cast.cast.map((ele, index) => (
              <img
                src={`https://image.tmdb.org/t/p/w185/${ele.profile_path}`}
                key={index}
              />
            ))}
          </div>
          <div className="close-btn">
            <button onClick={onClose}>Back</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
