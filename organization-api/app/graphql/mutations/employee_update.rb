# frozen_string_literal: true

module Mutations
  class EmployeeUpdate < BaseMutation
    description "Updates a employee by id"

    field :employee, Types::EmployeeType, null: false

    argument :id, ID, required: true
    argument :employee_input, Types::EmployeeInputType, required: true

    def resolve(id:, employee_input:)
      employee = ::Employee.find(id)
      raise GraphQL::ExecutionError.new "Error updating employee", extensions: employee.errors.to_hash unless employee.update(**employee_input)

      { employee: employee }
    end
  end
end
