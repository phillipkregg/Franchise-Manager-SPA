class User < ActiveRecord::Base
  attr_accessible :franchise_set, :user_domain, :user_name, :franchise_set_id
  
  belongs_to :franchise_set
end
