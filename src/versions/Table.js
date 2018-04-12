import React from 'react';

import { tableData } from './versionData';

import {
  ContainerTableData,
  ContainerTableRow,
  ContainerTableRowDesc,
  ContainerTableSpecs,
  RowDesc,
  RowSpecs
} from './Version.styles';

const Table = () => {
  return (tableData.map((data, i) => (
    <ContainerTableData key={i}>
      <ContainerTableRow>
        <ContainerTableRowDesc>
          <RowDesc>{data.desc}</RowDesc>
        </ContainerTableRowDesc>
        <ContainerTableSpecs>
          <RowSpecs>{data.specs}</RowSpecs>
        </ContainerTableSpecs>
      </ContainerTableRow>
    </ContainerTableData>
  )))
};

export default Table;

/*
const Table = () => {
  return (tableData.map((data, i) => (
    <StyledTable key={i} border={0}>
      <tbody>
        <tr>
          <RowDesc>{data.desc}</RowDesc>
          <RowSpecs>{data.specs}</RowSpecs>
        </tr>
      </tbody>
    </StyledTable>
  )))
};
*/
