class Franchise < ActiveRecord::Base
  attr_accessible :franchise_name, :franchise_num, :franchise_set_id
  
  belongs_to :franchise_set
end
