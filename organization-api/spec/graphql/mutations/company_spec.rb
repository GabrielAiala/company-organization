require 'rails_helper'

module Mutations
  RSpec.describe CompanyCreate, type: :request do
    describe '.resolve' do
      it 'creates a company' do
        company = create(:company)

        post '/graphql', params: { query: query(name: company.name) }

        expect(response).to have_http_status(:ok)
      end

      it 'returns a company' do
        company = create(:company)

        post '/graphql', params: { query: query(name: company.name) }
        json = JSON.parse(response.body)
        data = json['data']['companyCreate']['company']
        expect(data).to include(
          'id'             => be_present,
          'name'           => company.name,
        )
      end
    end

    def query(name:)
      <<~GQL
          mutation CompanyCreate {
            companyCreate(input: { companyInput: { name: "#{name}" } }) {
              company {
                createdAt
                id
                name
                updatedAt
              }
            }
          }
      GQL
    end
  end
end
