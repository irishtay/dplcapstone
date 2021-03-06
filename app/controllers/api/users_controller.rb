class Api::UsersController < ApplicationController

  def index
    myUsers = User.all.order(name: :desc)
    users = []
    myUsers.each do |user|
      users << {
        id: user.id,
        email: user.email,
        gender: user.bio.gender,
        name: user.bio.name,
        age: user.bio.age,
        image_url: user.bio.image_url,
        body: user.bio.body
      }
    end
    render json: users
  end

  def show
    render json: @user
  end
end
