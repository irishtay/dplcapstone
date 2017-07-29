class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable,
          :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :bio, dependent: :destroy
  has_many :user_sports, dependent: :destroy
  has_many :sports, through: :user_sports
  has_many :posts, dependent: :destroy
  has_many :message, dependent: :destroy

  has_many :friendships
	has_many :received_friendships, class_name: "Friendship", foreign_key: "friend_id"

	has_many :active_friends, -> { where(friendships: { accepted: true}) }, through: :friendships, source: :friend
	has_many :received_friends, -> { where(friendships: { accepted: true}) }, through: :received_friendships, source: :user
	has_many :pending_friends, -> { where(friendships: { accepted: false}) }, through: :friendships, source: :friend
	has_many :requested_friendships, -> { where(friendships: { accepted: false}) }, through: :received_friendships, source: :user

  # to call all your friends

	def friends
	  active_friends | received_friends
	end

# to call your pending sent or received

	def pending
		pending_friends | requested_friendships
	end
  
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
