import styled from "styled-components";
import { Row } from "../css-components/styles";

const CardRow = styled(Row)`
  gap: ${props => props.theme.spacing.sm};
`;

const TextCard = styled.p`
`;


export {
  CardRow,
  TextCard,
} 
