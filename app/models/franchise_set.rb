class FranchiseSet < ActiveRecord::Base
  attr_accessible :address, :country, :set_name, :set_num, :soa_num, :temperature, :time_zone
  
  has_many :franchises
  has_many :users
  has_many :features
end
