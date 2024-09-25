import React from 'react';
import {
  Background,
  ContainerButtons,
  Content,
  Message,
  Modal,
  Button,
} from './styles';

interface props {
  message: string,
  show?: boolean,
  onClickcancel: React.MouseEventHandler<HTMLButtonElement>,
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>,
}

export default function ModalDelete({
  show = false,
  message,
  onClickcancel,
  onClickDelete,
}: props) {

  if (!show) return null;

  return (
    <Background>
      <Modal>
        <Content>
          <Message>{message}</Message>
          <ContainerButtons>
            <Button onClick={onClickcancel}>cancel</Button>
            <Button onClick={onClickDelete}>Delete</Button>
          </ContainerButtons>
        </Content>
      </Modal>
    </Background>
  )
}
