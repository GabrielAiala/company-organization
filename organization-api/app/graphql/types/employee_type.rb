# frozen_string_literal: true

module Types
  class EmployeeType < Types::BaseObject
    field :id, ID, null: false
    field :manager_id, ID, null: true

    field :name, String
    field :company_id, Integer, null: false
    field :picture, String, null: true
    field :email, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    
    field :company, CompanyType, null: true
    field :subordinates, [EmployeeType], null: true
    field :manager, EmployeeType, null: true
  end
end
