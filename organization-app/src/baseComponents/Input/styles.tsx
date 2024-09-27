import styled from "styled-components";

const Field = styled.input`
  width: 100%;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.m}`};
  margin: ${props => `${props.theme.spacing.sm} 0`};;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export {
  Field,
}
