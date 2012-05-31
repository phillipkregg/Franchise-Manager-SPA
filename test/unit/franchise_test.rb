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

require 'test_helper'

class FranchiseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
