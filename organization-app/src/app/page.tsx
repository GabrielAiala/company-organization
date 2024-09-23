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

const GET_USERS = gql(`
  query Companies {
    companies {
      id
      name
    }
  }
`);


export default function Home() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_USERS);


  const handleClickAdd = () => {
    router.push('/company/new')
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
          <Card key={company.id}>
            <TextCard>{company.name}</TextCard>
          </Card>
        ))}
      </ContainerCard>
    </MainBody>
  );
}
