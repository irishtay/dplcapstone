class Api::UsersController < ApplicationController

  def index
    render json: User.all.order(email: :desc)
  end

  def show
    render json: @user
  end
end
