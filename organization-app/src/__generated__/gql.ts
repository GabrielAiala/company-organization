/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation EmployeeCreate($employee: EmployeeInput!) {\n    employeeCreate(input: { employeeInput: $employee }) {\n        employee {\n            id\n            name\n        }\n    }\n}": types.EmployeeCreateDocument,
    "\n  query Employees($id: ID!) {\n    employees(id: $id) {\n      id\n      name\n    }\n    company(id: $id) {\n      id\n      name\n    }\n  }\n": types.EmployeesDocument,
    "\n  mutation EmployeeDelete($id: ID!) {\n    employeeDelete(input: { id: $id }) {\n        employee {\n            id\n        }\n    }\n}": types.EmployeeDeleteDocument,
    "\n  mutation CompanyCreate($company: CompanyInput!) {\n    companyCreate(input: { companyInput: $company }) {\n        clientMutationId\n        company {\n            createdAt\n            id\n            name\n            updatedAt\n        }\n    }\n}": types.CompanyCreateDocument,
    "\n  query Companies {\n    companies {\n      id\n      name\n    }\n  }\n": types.CompaniesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EmployeeCreate($employee: EmployeeInput!) {\n    employeeCreate(input: { employeeInput: $employee }) {\n        employee {\n            id\n            name\n        }\n    }\n}"): (typeof documents)["\n  mutation EmployeeCreate($employee: EmployeeInput!) {\n    employeeCreate(input: { employeeInput: $employee }) {\n        employee {\n            id\n            name\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Employees($id: ID!) {\n    employees(id: $id) {\n      id\n      name\n    }\n    company(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Employees($id: ID!) {\n    employees(id: $id) {\n      id\n      name\n    }\n    company(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EmployeeDelete($id: ID!) {\n    employeeDelete(input: { id: $id }) {\n        employee {\n            id\n        }\n    }\n}"): (typeof documents)["\n  mutation EmployeeDelete($id: ID!) {\n    employeeDelete(input: { id: $id }) {\n        employee {\n            id\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CompanyCreate($company: CompanyInput!) {\n    companyCreate(input: { companyInput: $company }) {\n        clientMutationId\n        company {\n            createdAt\n            id\n            name\n            updatedAt\n        }\n    }\n}"): (typeof documents)["\n  mutation CompanyCreate($company: CompanyInput!) {\n    companyCreate(input: { companyInput: $company }) {\n        clientMutationId\n        company {\n            createdAt\n            id\n            name\n            updatedAt\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Companies {\n    companies {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Companies {\n    companies {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;