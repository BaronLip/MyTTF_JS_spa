class AddAttributesToMatches < ActiveRecord::Migration[5.2]
  def change
    add_column :matches, :date, :string
    add_column :matches, :notes, :string
  end
end
