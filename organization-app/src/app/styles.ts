import styled from 'styled-components';

//TODO reorganize components

const MainBody = styled.div`
  width: 100vw;
  display: flex;
  padding: ${props => `${props.theme.spacing.m} ${props.theme.spacing.xxl}`};
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const Header = styled.div`
  width: 100vw;
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
`;

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

  border-radius: 10px;
  border: none;
  padding: ${props => props.theme.spacing.sm};
`;

export {
  MainBody,
  Header,
  Title,
  Card,
  ContainerCard,
  TextCard,
  Button,
}
