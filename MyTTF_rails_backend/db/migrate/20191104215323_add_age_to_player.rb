class AddAgeToPlayer < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :age, :integer
  end
end
