class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.string :feature_name
      t.integer :franchise_set_id

      t.timestamps
    end
  end
end
