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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
