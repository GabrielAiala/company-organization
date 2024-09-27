# frozen_string_literal: true

module Types
  class EmployeeInputType < Types::BaseInputObject
    argument :name, String, required: false
    argument :company_id, Integer, required: false
    argument :picture, String, required: false
    argument :email, String, required: false
    argument :manager_id, ID, required: false
  end
end
