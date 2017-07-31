class Api::FriendsController < ApplicationController
  before_action :set_friend, only: [:show, :update, :destroy]

  def index
    render json: Friend.all
  end
  def create
    friend = Friend.create(friend_params)
    if friend.save
      render json: friend
    else
      render json: { errors: friend.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @friend.update(friend_update_params)
      render json: @friend, notice: "Friend Updated"
    else
      render json: {errors: friend.errors.full_messages }, status: :bad_request
    end
  end

  private
    def set_friend
      @friend = Friend.find(params[:id])
    end

    def friend_params
      params.require(:friend).permit(
        :requesting_user_id, :requesting_user_name, :requesting_user_body, :requesting_user_img, :receiving_user_id, :receiving_user_name, :receiving_user_body, :receiving_user_img
      )
    end
    def friend_update_params
      params.require(:friend).permit(
        :accepted
      )
    end
end
