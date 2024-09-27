import React from 'react';

import { AvailableManagers } from '@/__generated__/graphql';
import EmployeesCard from '../../../baseComponents/employee-card';

interface props {
  employees: AvailableManagers[],
  onClick: (id: string) => void,
}

export default function EmployeesList({ employees, onClick }: props) {
  return (
    <>
      {employees?.map(employee => (
        <EmployeesCard
          key={employee.id}
          onClick={(id) => onClick(id)}
          employee={employee}
        />
      ))}</>
  )
}
