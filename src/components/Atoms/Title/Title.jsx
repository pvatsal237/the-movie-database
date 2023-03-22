import React from 'react';

function Title({ text, size }) {
  let heading;

  switch (size) {
    case 'h1':
      heading = <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>;
      break;
    case 'h2':
      heading = <h2 dangerouslySetInnerHTML={{ __html: text }}></h2>;
      break;
    case 'h3':
      heading = <h3 dangerouslySetInnerHTML={{ __html: text }}></h3>;
      break;
    case 'h4':
      heading = <h4 dangerouslySetInnerHTML={{ __html: text }}></h4>;
      break;
    case 'h5':
      heading = <h5 dangerouslySetInnerHTML={{ __html: text }}></h5>;
      break;
    case 'h6':
      heading = <h6 dangerouslySetInnerHTML={{ __html: text }}></h6>;
      break;
    default:
      heading = <h6 dangerouslySetInnerHTML={{ __html: titleText }}></h6>;
      break;
  }

  return heading;
}

export default Title;
