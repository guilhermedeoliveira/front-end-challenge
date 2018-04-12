import React from 'react';
import { shape, number, string } from 'prop-types';

import {
  ContainerCarouselItem,
  ImageCarouselItem,
  TextCarouselItem
} from './Car.styles';

const CarouselItem = ({ item }) => (
  <ContainerCarouselItem>
    <ImageCarouselItem image={item.image} />
    <TextCarouselItem>{item.name}</TextCarouselItem>
  </ContainerCarouselItem>
);

CarouselItem.propTypes = {
  item: shape({
    image: number,
    name: string
  }).isRequired
};

export default CarouselItem;
