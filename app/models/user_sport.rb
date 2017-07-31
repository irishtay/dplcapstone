class UserSport < ApplicationRecord
  belongs_to :sport
  belongs_to :user

  validates_uniqueness_of :sport_id, :scope => :user_id
end
