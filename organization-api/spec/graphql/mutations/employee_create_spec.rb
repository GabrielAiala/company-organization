require 'rails_helper'

module Mutations
  RSpec.describe EmployeeCreate, type: :request do
    describe 'Create employee with valid params' do
      let(:company){ create(:company)}
      name = "employee"

      it 'should return an employee' do
        company = create(:company)

        post '/graphql', params: { query: query(
          name: name,
          companyId: company.id,
          email: 'teste',
          picture: 'base64 img'
        ) }

        json = JSON.parse(response.body)
        data = json['data']['employeeCreate']['employee']
        expect(data).to include(
          'id'             => be_present,
          'name'           => name,
        )
      end

      it 'should not return an employee' do

        post '/graphql', params: { query: query(
          name: name,
          companyId: 00,
          email: 'teste',
          picture: 'base64 img'
        ) }


        json = JSON.parse(response.body)
        expect(json['errors'].first['message']).to eq('Error creating employee')
 
      end

    end

    def query(name:, companyId:, email:, picture:)
      <<~GQL
          mutation EmployeeCreate {
            employeeCreate(input: { employeeInput: {name: "#{name}", companyId: #{companyId}, email:"#{email}", picture: "#{picture}" } }) {
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
