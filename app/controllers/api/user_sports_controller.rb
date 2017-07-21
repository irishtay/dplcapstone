class Api::UserSportsController < ApplicationController

  def index
    user_sports = []
    Usersport.where(user_id: current_user.id).each do |user_sport|
      sport = {
        id: user_sport.id,
        name: user_sport.sport.name,
        imageUrl: user_sport.sport.image,
        skillLevel: user_sport.skill_level
      }
      user_sports << sport
    end

    render json: user_sports
  end

  def create
    user_sport = Usersport.new(user_sport_params)
    user_sport.user_id = current_user.id
    if user_sport.save
      render json: user_sport
    else
      render json: {errors: user_sport.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    Usersport.find(params[:id]).destroy
  end

private

  def user_sport_params
    params.require(:user_sport).permit(:skill_level, :sport_id, :user_id)
  end


end
