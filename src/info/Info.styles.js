import styled from 'styled-components';

import styles from '../Style';

import carImage from '../assets/images/car-image.jpg';

export const Container = styled.section`
  padding: 0 12em;
  padding-bottom: 1em;
  
  background: url(${carImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerBottom = styled.div`
  padding-left: 25%;
`;

export const StyledTable = styled.table`
  &:nth-child(even){
    background-color: #f2f2f2;
  }

  &:nth-child(even){
    background-color: #f8f5f5;
  }
`;

export const ContainerTable = styled.div``;

export const ContainerTableData = styled.div`
  &:nth-child(even){
    background-color: rgba(0, 0, 0, 0.1)
  }

  &:nth-child(even){
    background-color: rgba(255,255,255, 0.1)
  }
`;

export const ContainerTableRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
  padding: 0.3em;
`;

export const ContainerTableRowDesc = styled.div`
  width: 60%;
  margin-right: 1em;
`;

export const ContainerTableSpecs = styled.div`
  width: 40%;
`;

export const RowDesc = styled.td`
  font-size: ${styles.fonts.fontSizeBase}px;
`;

export const RowSpecs = styled.td`
  color: ${styles.colors.promotion};
  font-size: ${styles.fonts.fontSizeBase}px;
`;

export const TableTitle = styled.h3`
  color: ${styles.colors.white};
  margin-bottom: 0.5em;
`;

export const Option = styled.div`
  border-bottom: 1px solid gray;
`;

export const ContainerLeft = styled.div`
  text-align: right;
  width: 25%;
`;

export const Title = styled.h3`
  color: ${styles.colors.white};
  margin-bottom: 0;
`;

export const TitleSerieItems = styled.h3`
  color: ${styles.colors.white};
  margin-top: 0.5em 0;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.p`
  cursor: pointer;
  padding-bottom: 0.5em;
  font-size: ${styles.fonts.fontSizeH5}px;
  border-bottom: 0.3px solid ${styles.colors.colorBackgroundLight};
  color: ${styles.colors.gray};
`;

export const Chip = styled.span`
  display: inline-block;
  color: ${styles.colors.white};
  background-color: ${styles.colors.promotion};
  font-size: ${styles.fonts.fontSizeSmall}px;
  padding: 0.25em 0.5em;
  margin: 0 0.5em 0.75em 0;
  border-radius: 20px;
`;
