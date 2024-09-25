require 'rails_helper'

module Mutations
  RSpec.describe EmployeeCreate, type: :request do
    describe 'Create employee' do
      let(:company){ create(:company)}
      name = "employee"
      it 'should create an employee' do

        post '/graphql', params: { query: query(name: name, companyId: company.id) }

        expect(response).to have_http_status(:ok)
      end

      it 'should return an employee' do
        company = create(:company)

        post '/graphql', params: { query: query(name: name, companyId: company.id) }
        json = JSON.parse(response.body)
        data = json['data']['employeeCreate']['employee']
        expect(data).to include(
          'id'             => be_present,
          'name'           => name,
        )
      end
    end

    def query(name:, companyId:)
      <<~GQL
          mutation EmployeeCreate {
            employeeCreate(input: { employeeInput: { name: "#{name}", companyId: #{companyId} } }) {
              employee {
                createdAt
                id
                name
                updatedAt
                companyId
              }
            }
          }
      GQL
    end
  end
end
