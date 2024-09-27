import React from 'react';

import {
  Column,
  ProfilePic,
} from '@/app/styles';

import { AvailableManagers } from '@/__generated__/graphql';
import { CardRow, TextCard } from './styles';
import { Card } from '../css-components/styles';

interface props {
  employee: AvailableManagers,
  onClick: (id: string) => void | undefined,
}


export default function EmployeeCard({ employee, onClick }: props) {
  return (
    <Card
      key={employee.id}
      onClick={() => onClick(employee.id)}
    >
      <CardRow>
        {employee.picture && (
          <ProfilePic src={employee.picture} />
        )}
        <Column>
          <TextCard>{employee.name}</TextCard>
          <TextCard>{employee.email}</TextCard>
        </Column>
      </CardRow>
    </Card>
  )
}
