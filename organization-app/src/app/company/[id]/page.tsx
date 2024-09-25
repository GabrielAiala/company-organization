'use client'

import React from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { gql } from "../../../__generated__/gql";
import {
  Header,
  MainBody,
  Title,
  Card,
  ContainerCard,
  TextCard,
  Button,
  RowCard,
  DeleteButton,
} from "../../styles";

const GET_EMPLOYEES = gql(`
  query Employees($id: ID!) {
    employees(id: $id) {
      id
      name
    }
    company(id: $id) {
      id
      name
    }
  }
`);

const EMPLOYEE_DELETE = gql(`
  mutation EmployeeDelete($id: ID!) {
    employeeDelete(input: { id: $id }) {
        employee {
            id
        }
    }
}`);

interface props {
  params: {
    id: string,
  }
}


//TODO colocar icones
export default function Home({ params: { id } }: props) {
  const router = useRouter();


  //TODO apagar do cache
  const { loading, error, data } = useQuery(GET_EMPLOYEES, { variables: { id: id } });
  const [deleteEmployee] = useMutation(EMPLOYEE_DELETE);



  const handleClickAdd = () => {
    router.push(`/company/${id}/new-employee`)
  }

  const handleClickDelete = (employeeId: string) => {
    deleteEmployee({
      variables: {
        id: employeeId,
      }
    })
  }


  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  console.log(error)

  return (
    <MainBody>
      <Header>
        <Title>{data?.company?.name}</Title>
      </Header>
      <Button onClick={handleClickAdd}>Add new employee</Button>
      <ContainerCard>

        {data?.employees?.map(employee => (
          <RowCard key={employee.id}>
            <Card>
              <TextCard>{employee.name}</TextCard>
            </Card>
            <DeleteButton onClick={() => handleClickDelete(employee.id)}>delete</DeleteButton>
          </RowCard>
        ))}

      </ContainerCard>
    </MainBody>
  );
}
