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

require 'test_helper'

class FranchiseSetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
