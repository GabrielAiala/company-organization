# frozen_string_literal: true

module Mutations
  class EmployeeDelete < BaseMutation
    description "Deletes a employee by ID"

    field :employee, Types::EmployeeType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      employee = ::Employee.find(id)
      raise GraphQL::ExecutionError.new "Error deleting employee", extensions: employee.errors.to_hash unless employee.destroy!

      { employee: employee }
    end
  end
end
