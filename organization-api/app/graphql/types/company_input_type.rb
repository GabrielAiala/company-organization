# frozen_string_literal: true

module Types
  class CompanyInputType < Types::BaseInputObject
    argument :id, ID, required: false
    argument :name, String, required: false
  end
end
