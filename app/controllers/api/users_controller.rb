class Api::UsersController < ApplicationController

  def index
<<<<<<< HEAD
    render json: User.all.order(name: :desc, email: )
=======
    render json: User.all.order(email: :desc)
>>>>>>> user to user start
  end

  def show
    render json: @user
  end
end
