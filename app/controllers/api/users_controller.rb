class Api::UsersController < ApplicationController

  def index
<<<<<<< HEAD
    render json: User.all.order(email: :desc)
=======
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
>>>>>>> Usertouser
  end

  def show
    render json: @user
  end
end
