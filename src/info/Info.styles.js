import styled from 'styled-components';

export const Container = styled.section`
  border 2px solid yellow;


`;

export const ContainerTop = styled.div`
  border 2px solid green;

  display: flex;
  flex-direction: row;
`;

export const ContainerBottom = styled.div`
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

export const ContainerTable = styled.div``;

export const Option = styled.div`
  border-bottom: 1px solid gray;
`;

export const Item = styled.p`
  cursor: pointer;
`;

export const Chip = styled.span`
  background-color: tomato;
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  border-radius: 20%;
`;