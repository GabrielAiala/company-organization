# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    #TODO error handling

    field :companies, [Types::CompanyType], null: true, description: "Return a list of companies"
    def companies
      Company.all
    end

    field :company, Types::CompanyType, null: true, description: "Return a company" do
      argument :id, ID, required: true
    end
    def company(id:)
      Company.find(id)
    end
  end
end
