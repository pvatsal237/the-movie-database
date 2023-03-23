import React from 'react';
import "./Image.css"

function Image({ source }) {
  return (
    <>
      <img src={source} />
    </>
  );
}

export default Image;
