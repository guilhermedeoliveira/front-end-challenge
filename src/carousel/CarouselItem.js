import React from 'react';

import { ImageCarousel } from './Carousel.styles'

const CarouselItem = ({ text, /* image */ }) => (
  <React.Fragment>
    {/* <ImageCarousel image={image} /> */}
    <h1>{text}</h1>
  </React.Fragment>
);

export default CarouselItem;
