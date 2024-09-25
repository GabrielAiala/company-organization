import styled from 'styled-components';

//TODO reorganize components

const MainBody = styled.div`
  width: 100%;
  display: flex;
  padding: ${props => `${props.theme.spacing.m} ${props.theme.spacing.xxl}`};
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const Header = styled.div`
  width: 100%;
`;

//TODO colocar para o base components
const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

// TODO colocar para o base components
const Card = styled.div`
  background-color: ${props => props.theme.colors.secondary["90"]};
  padding: ${props => props.theme.spacing.m};
  border-radius: 15px;
  cursor: pointer;
  
  flex: 6;

  &:hover {
    background-color: ${props => props.theme.colors.secondary["95"]};
  }

  &:active {
    background-color: ${props => props.theme.colors.secondary["80"]};
  }
`;


const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.spacing.sm};
`
const DeleteButton = styled.button`
  background: ${props => props.theme.colors.error["60"]};
  color: ${props => props.theme.colors.error["100"]};

  border-radius: 10px;
  border: none;
  padding: ${props => props.theme.spacing.m};
`

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const TextCard = styled.p`
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary["40"]};
  color: ${props => props.theme.colors.primary["98"]};

  border-radius: 15px;
  border: none;
  padding: ${props => props.theme.spacing.sm};
`;

export {
  MainBody,
  Header,
  Title,
  Card,
  RowCard,
  DeleteButton,
  ContainerCard,
  TextCard,
  Button,
}
