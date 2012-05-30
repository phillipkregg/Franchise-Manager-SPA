class Feature < ActiveRecord::Base
  attr_accessible :feature_name, :franchise_set_id
  
  belongs_to :franchise_set
end
