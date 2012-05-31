# == Schema Information
#
# Table name: franchise_sets
#
#  id          :integer         not null, primary key
#  set_name    :string(255)
#  set_num     :string(255)
#  soa_num     :string(255)
#  address     :string(255)
#  time_zone   :string(255)
#  country     :string(255)
#  temperature :string(255)
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#

class FranchiseSet < ActiveRecord::Base
  attr_accessible :address, :country, :set_name, :set_num, :soa_num, :temperature, :time_zone, :id, :created_at, :updated_at
  
  has_many :franchises
  has_many :users
  has_many :features
end
