# frozen_string_literal: true

module Mutations
  class EmployeeCreate < BaseMutation
    description "Creates a new employee"

    field :employee, Types::EmployeeType, null: false

    argument :employee_input, Types::EmployeeInputType, required: true

    def resolve(employee_input:)
      employee = ::Employee.new(**employee_input)
      raise GraphQL::ExecutionError.new "Error creating employee", extensions: employee.errors.to_hash unless employee.save

      { employee: employee }
    end
  end
end
