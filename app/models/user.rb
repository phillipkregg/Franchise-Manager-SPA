# == Schema Information
#
# Table name: users
#
#  id               :integer         not null, primary key
#  user_name        :string(255)
#  franchise_set    :string(255)
#  user_domain      :string(255)
#  franchise_set_id :integer
#  created_at       :datetime        not null
#  updated_at       :datetime        not null
#

class User < ActiveRecord::Base
  attr_accessible :franchise_set, :user_domain, :user_name, :franchise_set_id
  
  belongs_to :franchise_set
end
