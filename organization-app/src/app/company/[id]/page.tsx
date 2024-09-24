'use client'

import React from "react";
import { useQuery } from '@apollo/client';
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
} from "../../styles";

const GET_COMPANY = gql(`
  query Company($id: ID!) {
    company(id: $id) {
      id
      name
    }
  }
`);

interface props {
  params: {
    id: string,
  }
}

export default function Home({ params: { id } }: props) {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_COMPANY, { variables: { id: id } });


  const handleClickAdd = () => {
    // router.push('/company/new')
  }

  //TODO error handling

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  console.log(error)

  return (
    <MainBody>
      <Header>
        <Title>Empresas aaaaaaaaaa</Title>
      </Header>
      <Button onClick={handleClickAdd}>Add new emploee</Button>
      <ContainerCard>
        {data && data.company && (
          <p>{data.company.name}</p>
        )}

      </ContainerCard>
    </MainBody>
  );
}
