class AddAttributesToPlayer < ActiveRecord::Migration[5.2]
    def change
        add_column :players, :gender, :string
        add_column :players, :hand, :string
        add_column :players, :style, :string
        add_column :players, :blade, :string
        add_column :players, :red_rubber, :string
        add_column :players, :black_rubber, :string
        add_column :players, :email, :string
        add_column :players, :rating, :integer
        add_column :players, :wins, :integer
        add_column :players, :losses, :integer
    end
end
