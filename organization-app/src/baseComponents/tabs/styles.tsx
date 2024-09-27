import styled from "styled-components";
import { Row } from "../css-components/styles";


const Container = styled(Row)`
  background-color: ${props => props.theme.colors.primary[60]};
  width: 100%;
  justify-content: space-evenly;
  border-radius: 15px;

`;

const Tab = styled.div.attrs<{ selected?: boolean }>(props => ({
  selected: props.selected || false,
}))`
  border-bottom: ${props => props.selected? `4px solid ${props.theme.colors.primary[98]}` : `nome`} ;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.m}`};
`;

const Label = styled.p`
  color: ${props => props.theme.colors.primary[98]};
`;

export {
  Container,
  Tab,
  Label,
}
