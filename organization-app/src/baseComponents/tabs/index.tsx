import React from 'react';
import { Container, Label, Tab } from './styles';

interface props {
  selectecTab: string,
  tabs: string[],
  onClick: (tab: string) => void,
}


export default function Tabs({ selectecTab, tabs, onClick }: props) {
  return (
    <Container>
      {tabs.map(tab => (
        <Tab
          key={tab}
          onClick={() => onClick(tab)}
          selected={selectecTab === tab}
        >
          <Label>
            {tab}
          </Label>
        </Tab>
      ))}
    </Container>
  )
}
