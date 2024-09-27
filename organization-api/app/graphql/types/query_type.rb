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

    field :employees, [EmployeeType], null: true, description: "Return a list of employees" do
      argument :id, ID, required: true
    end
    def employees(id:)
      Employee.where(company_id: id)
    end

    field :employee, EmployeeType, null: true, description: "Return an employee" do
      argument :id, ID, required: true
    end
    def employee(id:)
      Employee.find(id)
    end

    field :availableManagers, [EmployeeType], description: "Return a list of possible managers" do
      argument :id, ID, required:true
    end
    def availableManagers(id:)
      employee = Employee.find(id)
      subordinates_ids = Employee.where(manager_id: id).select("id")

      Employee.where(company_id: employee.company_id) # company employees
              .where.not(id: id) # dont show the employee
              .where.not(id: employee.manager_id) # dont show his manager
              .where.not(id: subordinates_ids)# dont show his subordinates
    end
  end
end
