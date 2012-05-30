class CreateFranchiseSets < ActiveRecord::Migration
  def change
    create_table :franchise_sets do |t|
      t.string :set_name
      t.string :set_num
      t.string :soa_num
      t.string :address
      t.string :time_zone
      t.string :country
      t.string :temperature

      t.timestamps
    end
  end
end
