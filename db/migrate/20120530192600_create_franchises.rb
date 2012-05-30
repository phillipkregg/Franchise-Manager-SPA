class CreateFranchises < ActiveRecord::Migration
  def change
    create_table :franchises do |t|
      t.string :franchise_name
      t.string :franchise_num
      t.integer :franchise_set_id

      t.timestamps
    end
  end
end
