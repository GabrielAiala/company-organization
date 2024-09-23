'use client'
import React, { FormEvent } from "react";


import { Button, MainBody, Title } from "@/app/styles";
import { useMutation } from "@apollo/client";

import { gql } from "@/__generated__";
import Input from "@/baseComponents/Input";

const COMPANY_CREATE = gql(`
  mutation CompanyCreate($company: CompanyInput!) {
    companyCreate(input: { companyInput: $company }) {
        clientMutationId
        company {
            createdAt
            id
            name
            updatedAt
        }
    }
}`)
  ;
export default function Home() {
  //TODO error and loading handling
  const [saveCompany, { error, loading }] = useMutation(COMPANY_CREATE);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(formData.get("name"))
    saveCompany({
      variables: {
        company: {
          name: formData.get("name") as string,
        },
      },
    });
  }

  return (
    <MainBody>
      <Title>New Company</Title>
      <form onSubmit={onSubmit}>
        <Input name="name" />
        <Button type="submit">Create</Button>
      </form>
    </MainBody>
  );
}
