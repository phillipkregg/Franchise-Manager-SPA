# == Schema Information
#
# Table name: features
#
#  id               :integer         not null, primary key
#  feature_name     :string(255)
#  franchise_set_id :integer
#  created_at       :datetime        not null
#  updated_at       :datetime        not null
#

class Feature < ActiveRecord::Base
  attr_accessible :feature_name, :franchise_set_id
  
  belongs_to :franchise_set
end
