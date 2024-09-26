'use client'
import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";


import {
  Button,
  InputFile,
  MainBody,
  Title,
  LabelInput,
  Column,
} from "@/app/styles";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [saveCompany] = useMutation(EMPLOYEE_CREATE);
  const [picture, setPicture] = useState<string | ArrayBuffer | null | undefined>()

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setPicture(e.target?.result);
      };
      reader.readAsDataURL(file[0]);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    console.log(formData.get("name"))
    saveCompany({
      variables: {
        employee: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          picture: picture as string,
          companyId: parseInt(id, 10),
        },
      },
    }).then(()=> {
      router.push(`/company/${id}`);
    });
  }

  return (
    <MainBody>
      <Title>New Employee</Title>
      <form onSubmit={onSubmit}>
        <Column>

          <LabelInput>Profile Picture:</LabelInput>
          <InputFile
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          
          <LabelInput>Name:</LabelInput>
          <Input name="name" />

          <LabelInput>Email:</LabelInput>
          <Input name="email" />
          
          <Button type="submit">Create</Button>

        </Column>
      </form>
    </MainBody>
  );
}
