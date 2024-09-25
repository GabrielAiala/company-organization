# frozen_string_literal: true

module Types
  class EmployeeInputType < Types::BaseInputObject
    argument :id, ID, required: false
    argument :name, String, required: false
    argument :company_id, Integer, required: false
  end
end
