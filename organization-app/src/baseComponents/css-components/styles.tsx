import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  background-color: ${props => props.theme.colors.secondary["90"]};
  padding: ${props => props.theme.spacing.m};
  border-radius: 15px;
  cursor: pointer;
  flex: 8;

  &:hover {
    background-color: ${props => props.theme.colors.secondary["95"]};
  }

  &:active {
    background-color: ${props => props.theme.colors.secondary["80"]};
  }
`;
 

export {
  Row,
  Column,
  Card,
}
