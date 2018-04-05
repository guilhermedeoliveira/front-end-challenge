import React, { Component } from 'react';

import { tableData } from './infoData';

import { StyledTable } from './Info.styles';

const Table = () => {
  return (tableData.map(data => (
    <StyledTable border={0}>
      <tr>
        <td>{data.desc}</td>
        <td>{data.specs}</td>
      </tr>
    </StyledTable>
  )))
};

export default Table;