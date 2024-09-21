# frozen_string_literal: true

module Mutations
  class CompanyCreate < BaseMutation
    description "Creates a new company"

    field :company, Types::CompanyType, null: false

    argument :company_input, Types::CompanyInputType, required: true

    def resolve(company_input:)
      #TODO fix the way to crate a company
      company = Company.new(name: company_input[:name])
      raise GraphQL::ExecutionError.new "Error creating company", extensions: company.errors.to_hash unless company.save

      { company: company }
    end
  end
end
