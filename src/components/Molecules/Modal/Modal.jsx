import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Paragraph, Rating, Title, Image } from '../../Atoms';
import './Modal.css';

function Modal({ open, onClose, data }) {
  const [cast, setCast] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCast(data);
      });
  }, [cast]);

  console.log(`cast`, cast)

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-img">
          {
            <div className="image">
              {data.poster_path == null ? (
                <Image
                  source={`https://movies.fidalgo.dev/static/media/nothing.4c58037b.svg`}
                />
              ) : (
                <Image
                  source={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                />
              )}
            </div>
          }
        </div>
        <div className="info">
          <div className="close-btn-mobile">
            <button onClick={onClose}>Back</button>
          </div>
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
            {cast.cast.map((ele, index) =>
              ele.profile_path != null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${ele.profile_path}`}
                  key={index}
                />
              ) : (
                <img
                  src={`https://movies.fidalgo.dev/static/media/person.fdbc4613.svg`}
                  key={index}
                />
              )
            )}
          </div>
          <div className="close-btn-desktop">
            <button onClick={onClose}>Back</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
