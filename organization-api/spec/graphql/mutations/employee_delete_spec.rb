require 'rails_helper'

module Mutations
  RSpec.describe EmployeeDelete, type: :request do
    #TODO conferir se foi apagado do banco
    describe 'Delete an employee' do
      let(:company){ create(:company)}
      let(:employee) { create(:employee, company: company)}
      it 'should delete an employee' do

        post '/graphql', params: { query: query(id: employee.id) }

        expect(response).to have_http_status(:ok)
      end

      it 'should return an employee' do
        post '/graphql', params: { query: query(id: employee.id) }
        json = JSON.parse(response.body)
        data = json['data']['employeeDelete']['employee']
        expect(data).to include('id' => be_present)
      end
    end

    def query(id:)
      <<~GQL
          mutation EmployeeDelete {
            employeeDelete(input: { id: #{id}}) {
              employee {
                id
              }
            }
          }
      GQL
    end
  end
end
