class Sport < ApplicationRecord
  has_many :usersports
  has_many :posts
end
