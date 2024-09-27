import styled from 'styled-components';

//TODO reorganize components

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const MainBody = styled(Column)`
  width: 100%;
  padding: ${props => `${props.theme.spacing.m} ${props.theme.spacing.xxl}`};
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
  flex: 8;

  &:hover {
    background-color: ${props => props.theme.colors.secondary["95"]};
  }

  &:active {
    background-color: ${props => props.theme.colors.secondary["80"]};
  }
`;


const RowCard = styled(Row)`
  gap: ${props => props.theme.spacing.sm};
`
const DeleteButton = styled.button`
  background: ${props => props.theme.colors.error["60"]};
  color: ${props => props.theme.colors.error["100"]};
  border-radius: 10px;
  border: none;
  padding: ${props => props.theme.spacing.m};
  flex: 1;
`

const ContainerCard = styled(Column)`
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

const InputFile = styled.input`
`;

const LabelInput = styled.p``;

const ProfilePic = styled.img`
  border-radius: 10px;
`;

const CardRow = styled(Row)`
  gap: ${props => props.theme.spacing.sm};
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
  InputFile,
  LabelInput,
  Row,
  Column,
  ProfilePic,
  CardRow,
}
