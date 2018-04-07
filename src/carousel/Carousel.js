import React, { Component } from 'react';
import Slider from 'react-slick';

import CarouselItem from './CarouselItem';

import data from './carouselData';

class Carousel extends Component {
  render() {
    return (
      <Slider
        dots
        infinite
        arrows
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {data.map(car => <CarouselItem text={car} /* image={data.image} */ /> )}
      </Slider>
    );
  }
}

export default Carousel;