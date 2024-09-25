# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :employee_delete, mutation: Mutations::EmployeeDelete
    field :employee_create, mutation: Mutations::EmployeeCreate
    field :company_create, mutation: Mutations::CompanyCreate
    
  end
end
