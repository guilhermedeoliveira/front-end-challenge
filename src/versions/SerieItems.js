import React from 'react';

import { serieItems } from './versionData';

import { Chip } from './Version.styles';

const SerieItems = () => (
  serieItems.map((data, i) => (
    <Chip key={i}>{data}</Chip>
  ))
);

export default SerieItems;
