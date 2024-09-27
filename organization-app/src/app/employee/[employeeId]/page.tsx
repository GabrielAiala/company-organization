'use client'

import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';

import {
  MainBody,
  Title,
  ContainerCard,
  ProfilePic,
} from "../../styles";
import { gql } from "../../../__generated__/gql";
import Tabs from "@/baseComponents/tabs";
import EmployeesList from "./employee-list";
import EmployeeCard from "@/baseComponents/employee-card";
import { Card, Column } from "@/baseComponents/css-components/styles";
import { CardRow, TextCard } from "@/baseComponents/employee-card/styles";

const GET_EMPLOYEES = gql(`
  query AvailableManagersAndEmployee($employeeId: ID!) {
    availableManagers(id: $employeeId) {
      id
      name
      picture
      email
    }
    employee(id: $employeeId) {
      id
      name
      email
      picture
      company {
        name
      }
      manager {
        id
        name
        picture
        email
      }
      subordinates {
        id
        name
        picture
        email
        subordinates {
          id
          name
          picture
          email
        }
      }
    }
  }
`);

const EMPLOYEE_UPDATE = gql(`
  mutation EmployeeUpdate($id: ID!, $employeeInput: EmployeeInput! ) {
    employeeUpdate(input: { id: $id, employeeInput: $employeeInput }) {
        employee {
            id
        }
    }
}`);


interface props {
  params: {
    id: string,
    employeeId: string,
  }
}

const TABS = [
  "Available Managers",
  "Manager",
  "Subordinates",
  "Sub / second level"
];

export default function Home({ params: { employeeId } }: props) {
  // const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState(TABS[0])

  //TODO apagar do cache
  const {
    loading,
    data,
  } = useQuery(GET_EMPLOYEES, { variables: { employeeId } });
  const [updateEmployee] = useMutation(EMPLOYEE_UPDATE);


  const handleAssignManager = (managerId: string) => {
    updateEmployee({ variables: { id: employeeId, employeeInput: { managerId } } });
  }

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;


  return (
    <MainBody>

      <ContainerCard>
        <Title>Company: {data?.employee?.company?.name}</Title>

        {data?.employee && data.employee.picture && (
          <EmployeeCard
            employee={data.employee}
            onClick={() => { }}
          />
        )}

        <Tabs
          selectecTab={selectedTab}
          tabs={TABS}
          onClick={(x) => setSelectedTab(x)}
        />

        {selectedTab === TABS[0] && (
          <>
            <Title>Choose the employee&apos;s manager</Title>
            <EmployeesList
              onClick={(id) => handleAssignManager(id)}
              employees={data?.availableManagers || []}
            />
          </>
        )}
        {selectedTab === TABS[1] && data?.employee?.manager && (
          <>
            <Title>Manager</Title>

            <EmployeeCard
              employee={data?.employee?.manager}
              onClick={() => { }}
            />
          </>
        )}
        {selectedTab === TABS[2] && (
          <>
            <Title>Subordinates</Title>
            <EmployeesList
              onClick={() => { }}
              employees={data?.employee?.subordinates || []}
            />
          </>
        )}
        {selectedTab === TABS[3] && (
          <>
            <Title>Subordinates subordinates</Title>
            {data?.employee?.subordinates?.map(subordinate => (
              <Card key={subordinate.id}>
                <CardRow>
                  {subordinate.picture && (
                    <ProfilePic src={subordinate.picture} />
                  )}
                  <Column>
                    <TextCard>{subordinate.name}</TextCard>
                    <TextCard>{subordinate.email}</TextCard>
                  </Column>
                </CardRow>
                {subordinate.subordinates && subordinate.subordinates.length > 0 && (
                  <>
                    <p>subordinates</p>
                    {subordinate.subordinates.map(subSub => (
                      <EmployeeCard
                        key={subSub.id}
                        employee={subSub}
                        onClick={() => { }}
                      />
                    ))}
                  </>
                )}
              </Card>
            ))}
          </>
        )}

      </ContainerCard>
    </MainBody>
  );
}
