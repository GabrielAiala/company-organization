'use client'
import React, { FormEvent } from "react";


import { Button, Column, MainBody, Title } from "@/app/styles";
import { useMutation } from "@apollo/client";
import _ from "lodash";

import { gql } from "@/__generated__";
import Input from "@/baseComponents/Input";
import { GET_COMPANIES } from "@/app/page";
import { Label } from "@/baseComponents/tabs/styles";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [saveCompany] = useMutation(COMPANY_CREATE, {
    update(cache, { data }) {
      const queryCache = cache.readQuery({
        query: GET_COMPANIES,
      })

      const newCompanies = _.cloneDeep(queryCache?.companies)
      newCompanies?.push(data?.companyCreate?.company)

      cache.writeQuery({
        query: GET_COMPANIES,
        data: { companies: newCompanies }
      });
    }
  });

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
    }).then(() => router.push(`/`));
  }

  return (
    <MainBody>
      <Title>New Company</Title>
      <form onSubmit={onSubmit}>
        <Column>
          <p>Name:</p>
          <Input name="name" />
          <Button type="submit">Create</Button>
        </Column>
      </form>
    </MainBody>
  );
}
