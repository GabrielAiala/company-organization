'use client'

import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

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
import ModalDelete from "@/baseComponents/modal-delete";
import { gql } from "../../../__generated__/gql";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>('');

  const router = useRouter();

  //TODO apagar do cache
  const { loading, error, data } = useQuery(GET_EMPLOYEES, { variables: { id: id } });
  const [deleteEmployee] = useMutation(EMPLOYEE_DELETE);



  const handleClickAdd = () => {
    router.push(`/company/${id}/new-employee`)
  }

  const handleClickOpenModal = (employeeId: string) => {
    setIsOpen(true);
    setSelectedEmployeeId(employeeId);
  }

  const handleClickDelete = () => {
    deleteEmployee({
      variables: {
        id: selectedEmployeeId,
      }
    });
    //TODO feedback
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedEmployeeId('');
  }


  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  console.log(error)

  return (
    <MainBody>
      <ModalDelete
        message="Are you sure you want delete this employee?"
        onClickDelete={handleClickDelete}
        onClickcancel={handleCloseModal}
        show={isOpen}
      />
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
            <DeleteButton onClick={() => handleClickOpenModal(employee.id)}>delete</DeleteButton>
          </RowCard>
        ))}

      </ContainerCard>
    </MainBody>
  );
}
