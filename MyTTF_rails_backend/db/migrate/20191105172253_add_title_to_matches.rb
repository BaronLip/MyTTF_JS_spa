class AddTitleToMatches < ActiveRecord::Migration[5.2]
  def change
    add_column :matches, :title, :string
  end
end
