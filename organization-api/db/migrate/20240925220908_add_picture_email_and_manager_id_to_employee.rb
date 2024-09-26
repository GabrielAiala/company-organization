class AddPictureEmailAndManagerIdToEmployee < ActiveRecord::Migration[7.2]
  def change
    add_column :employees, :email, :string
    add_column :employees, :picture, :binary, limit: 2.megabytes
    add_reference :employees, :manager, foreign_key: { to_table: :employees }
  end
end
