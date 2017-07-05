class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable,
          :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :bio, dependent: :destroy
  has_many :languages, dependent: :destroy

  before_create :create_bio
  # after_create :create_bio

  private

    def create_bio
      self.bio = Bio.new(user_id: self.id)
    end

    # after_create
    # def create_bio
    #   self.bio = Bio.create!(user_id: self.id)
    # end
end
