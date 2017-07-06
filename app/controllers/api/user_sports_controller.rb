class Api::UserSportsController < ApplicationController
  def index
    render json: current_user.sports.all
  end

  def create
    user_sport = UserSport.new(user_sport_params)
    if user_sport.save
      render json: current_user.sports
    else
      render json: {errors: user_sport.errors.full_messages }, status: :bad_request
  end

  def destroy
    UserSport.find(params[:id]).destroy
  end

private

  def user_sport_params
    params.require(:user_sport).permit(:skill_level, :location, :sport_id, :user_id)
  end


end
