import React, { Component } from 'react';
import Slider from 'react-slick';

import CarouselItem from './CarouselItem';
import CustomArrow from './CustomArrow';

import data from './carData';

class Car extends Component {
  render() {
    return (
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={5}
        slidesToScroll={5}
        nextArrow={<CustomArrow />}
        prevArrow={<CustomArrow />}
      >
        {data.map((item, i) => <CarouselItem key={i} item={item} /> )}
      </Slider>
    );
  }
}

export default Car;