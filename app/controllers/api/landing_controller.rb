class Api::LandingController < ApplicationController
  def info
    bio = current_user.bio
    user_sports = current_user.sports
    render json: { bio: bio, user_sports: user_sports }
  end
end
