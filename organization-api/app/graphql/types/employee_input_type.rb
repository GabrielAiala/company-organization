# frozen_string_literal: true

#TODO separa em dois inputs type um para a criação e um para edição
module Types
  class EmployeeInputType < Types::BaseInputObject
    argument :id, ID, required: false
    argument :name, String, required: false
    argument :company_id, Integer, required: false
    argument :picture, String, required: false
    argument :email, String, required: false
    argument :manager_id, ID, required: false
  end
end
