# == Schema Information
#
# Table name: franchises
#
#  id               :integer         not null, primary key
#  franchise_name   :string(255)
#  franchise_num    :string(255)
#  franchise_set_id :integer
#  created_at       :datetime        not null
#  updated_at       :datetime        not null
#

class Franchise < ActiveRecord::Base
  attr_accessible :franchise_name, :franchise_num, :franchise_set_id, :id, :created_at, :updated_at
  
  belongs_to :franchise_set
end
