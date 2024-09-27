require 'rails_helper'

module Mutations
  RSpec.describe EmployeeUpdate, type: :request do
    describe 'Create employee with valid params' do
      let(:company){ create(:company)}
      let(:employee){ create(:employee, company: company)}
      let(:future_manager){ create(:employee, company: company)}

      let(:other_company){ create(:company)}
      let(:other_company_employee){ create(:employee, company: other_company)}
      
      let(:employee_a){ create(:employee, company: company)}
      let(:employee_b){ create(:employee, company: company, manager: employee_a)}
      let(:employee_c){ create(:employee, company: company, manager: employee_b)}
      # c cannot be a manager


      it 'should assign future manager to the employee' do

        post '/graphql', params: { query: query(id:employee.id, managerId: future_manager.id) }

        json = JSON.parse(response.body)
        data = json['data']['employeeUpdate']['employee']
        
        expect(data['managerId']).to eq(future_manager.id.to_s)
      end

      it 'should not assign manager from other company' do
        post '/graphql', params: { query: query(id:employee.id, managerId: other_company_employee.id) }

        json = JSON.parse(response.body)
        
        expect(json['errors'].first['message']).to eq('Error updating employee')
        expect(json['errors'].first['extensions']['manager'].first).to eq('The manager must be at the same company')
      end

      it 'should not allow hierarchy loop' do
        post '/graphql', params: { query: query(id:employee_a.id, managerId: employee_c.id) }

        json = JSON.parse(response.body)
        
        expect(json['errors'].first['message']).to eq('Error updating employee')
        expect(json['errors'].first['extensions']['manager_id'].first).to eq('Hierarchy loop is not allowed')
      end

    end

    def query(managerId:, id:)
      <<~GQL
          mutation EmployeeUpdate {
            employeeUpdate(input: { id:#{id}, employeeInput: { managerId: #{managerId} } }) {
              employee {
                id
                name
                companyId
                managerId
              }
            }
          }
      GQL
    end
  end
end
