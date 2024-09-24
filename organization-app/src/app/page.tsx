'use client'

import React from "react";
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { gql } from "../__generated__/gql";
import {
  Header,
  MainBody,
  Title,
  Card,
  ContainerCard,
  TextCard,
  Button,
} from "./styles";

const GET_COMPANIES = gql(`
  query Companies {
    companies {
      id
      name
    }
  }
`);


export default function Home() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_COMPANIES);


  const handleClickAdd = () => {
    router.push('/company/new')
  }

  // fazer a navegação passando parametro
  const handleClickCompany = (id: string) => {
    console.log(id)
    router.push(`/company/${id}`);
  }


  //TODO error handling

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <MainBody>
      <Header>
        <Title>Empresas</Title>
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
