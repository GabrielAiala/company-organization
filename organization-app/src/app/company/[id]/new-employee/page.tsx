'use client'
import React, { FormEvent } from "react";


import { Button, MainBody, Title } from "@/app/styles";
import { useMutation } from "@apollo/client";

import { gql } from "@/__generated__";
import Input from "@/baseComponents/Input";

const EMPLOYEE_CREATE = gql(`
  mutation EmployeeCreate($employee: EmployeeInput!) {
    employeeCreate(input: { employeeInput: $employee }) {
        employee {
            id
            name
        }
    }
}`);

interface props {
  params: {
    id: string,
  }
}


export default function Home({ params: { id } }: props) {
  //TODO error and loading handling
  const [saveCompany, { error, loading }] = useMutation(EMPLOYEE_CREATE);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(formData.get("name"))
    saveCompany({
      variables: {
        employee: {
          name: formData.get("name") as string,
          companyId: parseInt(id, 10),
        },
      },
    });
  }

  return (
    <MainBody>
      <Title>New Employee</Title>
      <form onSubmit={onSubmit}>
        <Input name="name" />
        <Button type="submit">Create</Button>
      </form>
    </MainBody>
  );
}
