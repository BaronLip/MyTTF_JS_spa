class CreatePlayers < ActiveRecord::Migration[5.2]
    def change
        create_table :players do |t|
            t.string :username
            # t.string :email
            # t.integer :ranking
            # t.integer :wins, default: 0 
            # t.integer :losses, default: 0
            # t.string :gender
            t.timestamps
        end
    end
end
