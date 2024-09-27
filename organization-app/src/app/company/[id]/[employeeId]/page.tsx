'use client'

import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

import {
  MainBody,
  Title,
  Card,
  ContainerCard,
  TextCard,
  RowCard,
  Column,
  ProfilePic,
  CardRow,
} from "../../../styles";
import { gql } from "../../../../__generated__/gql";

const GET_EMPLOYEES = gql(`
  query AvailableManagersAndEmployee($employeeId: ID!) {
    availableManagers(id: $employeeId) {
      id
      name
      picture
      email
    }
    employee(id: $employeeId) {
      id
      name
      email
      picture
      company {
        name
      }
      manager {
        id
        name
        picture
        email
      }
      subordinates {
        id
        name
        picture
        email
        subordinates {
          id
          name
          picture
          email
        }
      }
    }
  }
`);

const EMPLOYEE_UPDATE = gql(`
  mutation EmployeeUpdate($id: ID!, $employeeInput: EmployeeInput! ) {
    employeeUpdate(input: { id: $id, employeeInput: $employeeInput }) {
        employee {
            id
        }
    }
}`);


interface props {
  params: {
    id: string,
    employeeId: string,
  }
}


//TODO colocar icones
export default function Home({ params: { employeeId } }: props) {
  // const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>('');

  //TODO apagar do cache
  const {
    loading,
    // error,
    data,
   } = useQuery(GET_EMPLOYEES, { variables: { employeeId } });
  const [updateEmployee] = useMutation(EMPLOYEE_UPDATE);



  // const handleClickAdd = () => {
  //   router.push(`/company/${id}/new-employee`)
  // }


  const handleAssignManager = (managerId: string) => {
    updateEmployee({ variables: { id: employeeId, employeeInput: { managerId } } });
  }

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;


  return (
    <MainBody>
      
      <ContainerCard>
      <Title>{data?.employee?.company?.name}</Title>

        {data?.employee && data.employee.picture && (
          <Card>
            <CardRow>
              <ProfilePic src={data.employee.picture} />
              <Column>
                <TextCard>{data.employee.name}</TextCard>
                <TextCard>{data.employee.email}</TextCard>
              </Column>
            </CardRow>
          </Card>
        )}
        <Title>Choose the employee&apos;s manager</Title>

        {data?.availableManagers?.map(employee => (
          <RowCard key={employee.id}>
            <Card onClick={() => handleAssignManager(employee.id)}>
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
          </RowCard>
        ))}

      </ContainerCard>
    </MainBody>
  );
}
