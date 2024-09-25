import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => `${props.theme.colors.primary[70]}77`};
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;




const Modal = styled.div`
  background-color: white;
  padding: ${props => props.theme.spacing.xxl};
  border-radius: 20px;
  z-index: 1000;
`;

const Content = styled.div``;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${props => props.theme.spacing.sm};
`;


//TODO fazer component para o Button e fazer parametrizavel
const Button = styled.button`
  background: ${props => props.theme.colors.error["60"]};
  color: ${props => props.theme.colors.error["100"]};

  border-radius: 10px;
  border: none;
  padding: ${props => props.theme.spacing.m};
`;

const Message = styled.p`
  color: black;
`;

export {
  Background,
  Modal,
  Content,
  ContainerButtons,
  Button,
  Message,
};
