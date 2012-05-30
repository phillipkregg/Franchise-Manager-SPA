class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :franchise_set
      t.string :user_domain
      t.integer :franchise_set_id

      t.timestamps
    end
  end
end
