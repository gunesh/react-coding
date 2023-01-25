import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
  return (
    <div>
      <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
        {/* children here */}
      </Slide>
    </div>
  );
};

export default Example;
