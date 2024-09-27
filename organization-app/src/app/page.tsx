'use client'

import React from "react";
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { gql } from "../__generated__/gql";
import {
  Header,
  MainBody,
  Title,
  ContainerCard,
  Button,
} from "./styles";
import { TextCard } from "@/baseComponents/employee-card/styles";
import { Card } from "@/baseComponents/css-components/styles";

export const GET_COMPANIES = gql(`
  query Companies {
    companies {
      id
      name
    }
  }
`);


export default function Home() {
  const router = useRouter();

  const { loading, data } = useQuery(GET_COMPANIES);


  const handleClickAdd = () => {
    router.push('/company/new')
  }

  // fazer a navegação passando parametro
  const handleClickCompany = (id: string) => {
    console.log(id)
    router.push(`/company/${id}`);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <MainBody>
      <Header>
        <Title>Companies</Title>
      </Header>
      <Button onClick={handleClickAdd}>Add new company</Button>
      <ContainerCard>
        {data && data.companies && data.companies.map(company => (
          <Card key={company.id} onClick={() => handleClickCompany(company.id)}>
            <TextCard>{company.name}</TextCard>
          </Card>
        ))}
      </ContainerCard>
    </MainBody>
  );
}
