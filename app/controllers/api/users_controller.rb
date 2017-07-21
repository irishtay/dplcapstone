class Api::UsersController < ApplicationController

  def index
    render json: User.all.order(name: :desc, email: )
  end

  def show
    render json: @user
  end
end
