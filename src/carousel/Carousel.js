import React, { Component } from 'react';
import Slider from 'react-slick';

import CarouselItem from './CarouselItem';
import CustomArrow from './CustomArrow';

import {
  ContainerCarouselItem,
  ImageCarousel
} from './Carousel.styles'

import styles from '../Style';
import data from './carouselData';

class Carousel extends Component {
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

export default Carousel;
