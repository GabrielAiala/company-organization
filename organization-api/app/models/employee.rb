class Employee < ApplicationRecord
  belongs_to :company
  has_many :subordinates, class_name: 'Employee', foreign_key: 'manager_id'
  belongs_to :manager, class_name: 'Employee', optional: true

  validate :same_company_manager
  validate :do_not_hierarchy_loop

  private

  def same_company_manager
    if manager && manager.company_id != company_id
      errors.add(:manager, "The manager must be at the same company")
    end
  end

  def do_not_hierarchy_loop
    if manager.present? && hierarchy_loop(manager)
      errors.add(:manager_id, 'Hierarchy loop is not allowed')
    end
  end

  # A 
  # B manager A
  # C manager B
  # 
  # try to set C to A manager
  # A.manager = C try
  # C.manager = B
  # B.manager = A verified loop

  def hierarchy_loop(current_manager)
    return false if current_manager.nil?

    return true if current_manager == self

    hierarchy_loop(current_manager.manager)
  end 

end
