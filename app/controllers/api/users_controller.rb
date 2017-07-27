class Api::UsersController < ApplicationController

  def index
<<<<<<< HEAD
<<<<<<< HEAD
    render json: User.all.order(name: :desc, email: )
=======
    render json: User.all.order(email: :desc)
>>>>>>> user to user start
=======
    dumbass_users = User.all.order(email: :desc)
    users = []
    dumbass_users.each do |user|
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
>>>>>>> Updated user list
  end

  def show
    render json: @user
  end
end
