import React, { Component } from 'react';

import { serieItems } from './infoData';

import { Chip } from './Info.styles';

const SerieItems = () => {
  return (serieItems.map((data, i) => (
    <Chip key={i}>{data}</Chip>
  )))
};

export default SerieItems;