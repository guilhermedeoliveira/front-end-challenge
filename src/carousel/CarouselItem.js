import React from 'react';

import {
  ContainerCarouselItem,
  ImageCarouselItem,
  TextCarouselItem
} from './Carousel.styles'

const CarouselItem = ({ item }) => (
  <ContainerCarouselItem>
    <ImageCarouselItem image={item.image} />
    <TextCarouselItem>{item.name}</TextCarouselItem>
  </ContainerCarouselItem>
);

export default CarouselItem;
