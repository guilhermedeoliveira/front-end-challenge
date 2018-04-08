import styled from 'styled-components';

import styles from '../Style';

export const Container = styled.section`
  

  background-color: ${styles.colors.colorBackgroundBase};
  border 2px solid yellow;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3em 0 15em;

  border 2px solid red;
`;

export const ContainerBottom = styled.div`

  padding-left: 40%;
  border 2px solid blue;
`;

export const StyledTable = styled.table`
  &:nth-child(even){
    background-color: #f2f2f2;
  }

  &:nth-child(even){
    background-color: #f8f5f5;
  }
`;

export const ContainerTable = styled.div`

  
  border: 2px solid green;
`;

export const TableTitle = styled.h3`
  color: ${styles.colors.white};
`

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
  margin-top: 0.5em;
  margin-bottom: 0.5em;
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
`;

export const Chip = styled.span`
  color: ${styles.colors.white};
  background-color: ${styles.colors.promotion};
  font-size: ${styles.fonts.fontSizeSmall}px;
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  border-radius: 20px;
`;